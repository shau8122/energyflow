import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { getUserById } from "./data/user"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import type { NextAuthConfig } from "next-auth"
import { getUserByMobile } from "./data/user";
import { LoginSchema } from "./schemas";
import { getTokenByMobile } from "./data/token";

const prisma = new PrismaClient()

export const { handlers: {
  GET, POST
}, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      // if (token.role && session.user) {
      //   session.user.role = token.role as userRole;
      // }

      // if (session.user) {
      //   session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      // }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      // const existingAccount = await getAccountByUserId(
      //   existingUser.id
      // );

      // token.isOAuth = !!existingAccount;
      token.id = existingUser.id
      // token.role = existingUser.role;
      // token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    }
  },

  logger: {
    error(code, ...message) {
      console.error(code, message)
    },
    warn(code, ...message) {
      console.warn(code, message)
    },
    debug(code, ...message) {
      console.debug(code, message)
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google,
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Credentials({
      credentials: {
        mobile: {},
        otp: {},
      },
      async authorize(credentials) {
        // Validate the incoming credentials against your login schema
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { mobile, otp } = validatedFields.data;

          // Retrieve user based on mobile number
          const user = await getUserByMobile(mobile);

          // If user does not exist, return null
          if (!user) {
            throw new Error("User not found.")
          }
          // Retrieve token based on mobile number
          const token = await getTokenByMobile(mobile);
          console.log(token, otp)


          // If token does not exist, return null
          if (!token) {
            throw new Error("Token not found.")
          }

          // Check if the provided OTP matches the stored token
          const passwordsMatch = token.token === otp;



          // If OTP is valid, return the user
          if (passwordsMatch) {
            return user;
          }

        }

        // If validation fails or OTP is incorrect, return null
        throw new Error("Authentication not failed.")
      },
    }),
  ],
})