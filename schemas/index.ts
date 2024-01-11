
import * as z from "zod";

export const LoginSchema = z.object({
  mobile: z.string().min(10, {
    message: "mobile is required",
  }),
  otp: z.string().min(6, {
    message: "otp is required",
  }),
  
});