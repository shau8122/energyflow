

import { getUserByMobile } from "@/data/user";
import db from "@/libs/db";
import { generateVerificationToken } from "@/libs/token";
import { NextResponse } from "next/server";

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const twilioClient = require("twilio")(accountSid, authToken);

export async function POST(request:Request) {
  try {
    const body = await request.json();
    const {mobile} = body

    if(!mobile){
      return new NextResponse('Missing info', { status: 400 });
    }

    const token = await generateVerificationToken(mobile)

    if(!token){
      return new NextResponse('Internal Error',{status:500})
    }
    const existingUser = await getUserByMobile(mobile);
    if(!existingUser){
      const newUser = await db.user.create({
        data:{
          mobile
        }
      })
      if(!newUser){
        return new NextResponse('Internal Error',{status:500})
      }
    }
    const result = await twilioClient.messages.create({
      body: `Your otp for enerzyflow is ${token}`,
      from: "+17173706106",
      to: mobile
    });
    if(!result){
      return new NextResponse('Internal Error',{status:500})
    }
    return new NextResponse(result, { status: 200 });
  } catch (error) {
     console.log(error,'REGISTRATION_ERROR');
    return new NextResponse('Internal Error',{status:500})
  }



  

  
}