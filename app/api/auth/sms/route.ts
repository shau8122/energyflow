

import { getUserByEmail, getUserByMobile } from "@/data/user";
import { db } from "@/libs/db";
import { generateVerificationToken } from "@/libs/token";
import { NextResponse } from "next/server";

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const twilioClient = require("twilio")(accountSid, authToken);

export async function POST() {
  const mobile = '+917654831436'

  const token = await generateVerificationToken(mobile)

  if(!token){
    return new NextResponse(null, {status:403})
  }
  
  const existingUser = await getUserByMobile(mobile);
  if(!existingUser){
    const newUser = await db.user.create({
      data:{
        mobile
      }
    })
    if(!newUser){
      return new NextResponse(null, {status:403})
    }
  }
  const result = await twilioClient.messages.create({
    body: `Your otp for enerzyflow is ${token}`,
    from: "+17173706106",
    to: mobile
  });

  if(!result){
    return  new NextResponse(null, {status:403})
  }
  
  return new NextResponse(null, { status: 200 });
}