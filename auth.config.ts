import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import type { NextAuthConfig } from "next-auth"
import { getUserByMobile } from "./data/user";
import { LoginSchema } from "./schemas";
import { getTokenByMobile } from "./data/token";


export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Credentials({
      async authorize(credentials) {
        // Validate the incoming credentials against your login schema
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { mobile, otp } = validatedFields.data;

          // Retrieve user based on mobile number
          const user = await getUserByMobile(mobile);

          // If user does not exist, return null
          if (!user) {
            return null;
          }
          // Retrieve token based on mobile number
          const token = await getTokenByMobile(mobile);
          console.log(token, otp)


          // If token does not exist, return null
          if (!token) {
            return null;
          }

          // // // Check if the provided OTP matches the stored token
          const passwordsMatch = token.token === otp;



          // If OTP is valid, return the user
          if (passwordsMatch) {
            return user;
          }
        }

        // If validation fails or OTP is incorrect, return null
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig