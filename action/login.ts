"use server"
import * as  z  from "zod"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"
import { getUserByEmail, getUserByMobile } from "@/data/user"
// import { sendTwoFactorTokenEmail, sendVerificationEmail } from "@/libs/mail"
// import { generateTwoFactorToken, generateVerificationToken } from "@/libs/token"
// import { getTwoFactorTokenByEmail } from "@/data/twoFactorToken"
import { db } from "@/libs/db"
import { LoginSchema } from "@/schemas"

// import { getTwoFactorConfirmationByUserId } from "@/data/twoFactorConfirmation"

export const login = async(values:z.infer<typeof LoginSchema>,
  callbackUrl?:string | null
  ) => {
    const validatedFields = LoginSchema.safeParse(values)

    if(!validatedFields.success){
      return {error:"Invalid fields!"}
    }

    const { mobile, otp } = validatedFields.data

  
    try {
      await signIn("credentials", {
        mobile,
        otp,
        redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT
      })
    } catch (error) {
     if(error instanceof AuthError){
       switch(error.type){
        case "CredentialsSignin":
          return {error:"Invalid credentials!"}
        default:
          return {error:"Something went wrong!"}
       }
     }
     throw error
    }

}