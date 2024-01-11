// import twilio from 'twilio';

// // Initialize Twilio client outside the function or use asynchronous initialization.
// const accountSid = "AC4875edce452a085fd3a5cd0867064552";
// const authToken = "59874b01856cfaa8e164c78ce72e495e";
// const twilioClient = twilio(accountSid, authToken);

// export const sendSms = async (mobile: string, message: string) => {
//   console.log("Sending sms to ", mobile);
//   console.log("Message is ", message);

//   try {
//     // Use the pre-initialized Twilio client.
//     const result = await twilioClient.messages.create({
//       body: message,
//       from: "+17173706106",
//       to: mobile
//     });

//     console.log("Result is ", result);
//     return { success: "Sms sent!" };
//   } catch (error) {
//     console.error("Error sending SMS:", error);
//     return { error: "Failed to send SMS" };
//   }
// };
