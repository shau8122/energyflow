

// const accountSid = "AC4875edce452a085fd3a5cd0867064552";
// const authToken = "59874b01856cfaa8e164c78ce72e495e";

// const twilioClient = require("twilio")(accountSid, authToken);
// export const sendVerificationOtp=async(otp:string, mobile:string)=> {
  
    
//       const result = await twilioClient.messages.create({
//         body: `Your otp for enerzyflow is ${otp}`,
//         from: "+17173706106",
//         to: mobile
//       });
//    if(!result){
//     return null
//    }

//    return result

// }
// // import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // const domain = process.env.NEXT_PUBLIC_APP_URL;



// // export const sendTwoFactorTokenEmail = async (
// //   email: string,
// //   token: string
// // ) => {
// //   await resend.emails.send({
// //     from: "onboarding@resend.dev",
// //     to: email,
// //     subject: "2FA Code",
// //     html: `<p>Your 2FA code: ${token}</p>`
// //   });
// // };

// // export const sendPasswordResetEmail = async (
// //   email: string,
// //   token: string,
// // ) => {
// //   const resetLink = `${domain}/auth/new-password?token=${token}`
// //   await resend.emails.send({
// //     from: "onboarding@resend.dev",
// //     to: email,
// //     subject: "Reset your password",
// //     html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
// //   });
// // };

// // export const sendVerificationEmail = async (
// //   email: string, 
// //   token: string
// // ) => {
// //   const confirmLink = `${domain}/auth/new-verification?token=${token}`;

// //  const res= await resend.emails.send({
// //     from: "onboarding@resend.dev",
// //     to: email,
// //     subject: "Confirm your email",
// //     html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
// //   });
// //   console.log(res,":res")
// // };