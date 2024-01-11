import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { getUserById } from "./data/user"

const prisma = new PrismaClient()

export const { handlers: {
  GET, POST
}, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks:{
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
  ...authConfig,
})