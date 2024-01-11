"use server"
import * as  z  from "zod"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

import { LoginSchema } from "@/schemas"


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