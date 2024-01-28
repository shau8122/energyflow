import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    
    
    const body = await request.json();
    const {email,query} =body;
    // Create a nodemailer transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDEREMAILID,
      pass: process.env.SENDERMAILPASSWORD,
    },
  });
  // Email content
  const mailOptions = {
    from: process.env.SENDEREMAILID,
    to: process.env.RECIEVEREMAILID,
    subject: 'Enerzyflow query',
    text: `Email: ${email}\nQuery: ${query}`,
  };
  console.log(JSON.stringify(mailOptions))
  // Send email
  const info = await transporter.sendMail(mailOptions);
  
  return new NextResponse(JSON.stringify(info), { status: 200})
  } catch (error) {
    console.log(error, 'ORDER_ERROR');
    return new NextResponse('Internal Error', { status: 500 })
  }
}
