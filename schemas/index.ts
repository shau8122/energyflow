
import * as z from "zod";

export const LoginSchema = z.object({
  mobile: z.string().min(10, {
    message: "mobile is required",
  }),
  otp: z.string().min(6, {
    message: "otp is required",
  }),

});
export const UserIndividualSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .trim(),
  customerType: z.enum(["INDIVIDUAL", "ORGANISATION"]),
  email: z.string().email().trim(),
  mobile: z.coerce.number().refine((value) => String(value).length === 10, {
    message: "Mobile number must be exactly 10 digits.",
}),
  state: z.string().min(2, {
    message: "Please select a state.",
  }),
  city: z
    .string()
    .min(2, {
      message: "Please enter your city name.",
    })
    .trim(),
  pinCode: z.coerce.number().refine((value) => String(value).length === 6, {
    message: "Zip code must be exactly 6 characters.",
  }),
  landmark: z
    .string()
    .min(2, {
      message: "Please enter your landmark.",
    })
    .trim(),
})
export const UserOrganizationSchema = UserIndividualSchema.extend({
  organisationName:z.string().min(3,{
    message:"input is very short"
  })
})

export const CustomisationOrderSchema =  z.object({
  bottleLabel: z.string(),
  totalQuantity: z.coerce.number().min(1, {
    message: "Total quantity must be at least 1.",
  }),
  totalPrice: z.coerce.number().min(1, {
    message: "Total price must be at least 1.",
  }),
  remark: z.string().min(2, {
    message: "Please enter your remark.",
  }),
  couponCode: z.string().min(2, {
    message: "Please enter your coupon code.",
  }),
  item: z.string(),
  quantity: z.coerce.number().min(1, {
    message: "Quantity must be at least 1.",
  }),
  price: z.coerce.number().min(1, {
    message: "Price must be at least 1.",
  }),
  state: z.string().min(2, {
    message: "Please enter your state.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  pinCode: z.coerce.number().refine((value) => String(value).length === 6, {
    message: "Zip code must be exactly 6 characters.",
  }),
  landmark: z.string().min(2, {
    message: "Please enter your location.",
  }),
});
export const bussinessSchema = z.object({
  title:z.string().min(2,{
    message:"too short"
  }),
  address:z.string().min(10,{
    message:"too short",
  }),
  price:z.coerce.number().optional(),
  discount:z.coerce.number().optional(),
  about:z.string().min(10,{
    message:"too short"
  }),
  mobile: z.coerce.number().refine((value) => String(value).length === 10, {
    message: "Zip code must be exactly 10 characters.",
  }),
})