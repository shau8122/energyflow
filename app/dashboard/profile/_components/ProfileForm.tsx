"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import FormFieldInput from "../../_components/FormFieldInput";
import FormFieldSelect from "../../_components/FormFieldSelect";
import FormFieldCommand from "../../_components/FormFieldCommand";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .trim(),
  customerType: z.enum(["individual", "organization"]),
  email: z.string().email().trim(),
  mobileNo: z.string().refine((value) => value.length === 10, {
    message: "Mobile number must be exactly 10 characters.",
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
  zipCode: z.string().refine((value) => value.length === 6, {
    message: "Zip code must be exactly 6 characters.",
  }),
  landmark: z
    .string()
    .min(2, {
      message: "Please enter your landmark.",
    })
    .trim(),
});
const extendedSchema = formSchema.extend({
  organizationName: z.string().min(2, {
    message: "Please enter your organization name.",
  })
});

const states = [
  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
  { label: "Assam", value: "Assam" },
  { label: "Bihar", value: "Bihar" },
  { label: "Chhattisgarh", value: "Chhattisgarh" },
  { label: "Goa", value: "Goa" },
  { label: "Gujarat", value: "Gujarat" },
  { label: "Haryana", value: "Haryana" },
  { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  { label: "Jharkhand", value: "Jharkhand" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Kerala", value: "Kerala" },
  { label: "Madhya Pradesh", value: "Madhya Pradesh" },
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Manipur", value: "Manipur" },
  { label: "Meghalaya", value: "Meghalaya" },
  { label: "Mizoram", value: "Mizoram" },
  { label: "Nagaland", value: "Nagaland" },
  { label: "Odisha", value: "Odisha" },
  { label: "Punjab", value: "Punjab" },
  { label: "Rajasthan", value: "Rajasthan" },
  { label: "Sikkim", value: "Sikkim" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Telangana", value: "Telangana" },
  { label: "Tripura", value: "Tripura" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh" },
  { label: "Uttarakhand", value: "Uttarakhand" },
  { label: "West Bengal", value: "West Bengal" },
  {
    label: "Andaman and Nicobar Islands",
    value: "Andaman and Nicobar Islands",
  },
  { label: "Chandigarh", value: "Chandigarh" },
  {
    label: "Dadra and Nagar Haveli and Daman and Diu",
    value: "Dadra and Nagar Haveli and Daman and Diu",
  },
  { label: "Lakshadweep", value: "Lakshadweep" },
  { label: "Delhi", value: "Delhi" },
  { label: "Puducherry", value: "Puducherry" },
  { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
  { label: "Ladakh", value: "Ladakh" },
] as const;
const customerTypes = [
  { label: "Individual", value: "individual" },
  { label: "Organization", value: "organization" },
] as const;

export const ProfileForm = () => {
  const [customerTypeValue, setCustomerTypeValue] = useState("individual");
  const mainSchema = customerTypeValue === "organization" ? extendedSchema : formSchema;
  const form = useForm<z.infer<typeof mainSchema>>({
    resolver: zodResolver(mainSchema),
    defaultValues: {
      name: "",
      email: "",
      customerType: "individual",
      mobileNo: "",
      state: "",
      city: "",
      zipCode: "",
      landmark: "",
      
    },
  });
  

  const { isSubmitting, isValid } = form.formState;
  function onSubmit(values: z.infer<typeof mainSchema>) {
    console.log(values);
    // try {
    //   const response = await axios.post("/api/courses", values);
    //   router.push(`/teacher/courses/${response.data.id}`);
    //   toast.success("Course created");
    // } catch {
    //   toast.error("Something went wrong");
    // }
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }
  const customerType = form.watch('customerType');
  useEffect(() => {
    setCustomerTypeValue(customerType);
   
  }, [customerType]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3"
      >
        <FormFieldSelect
          formControl={form.control}
          name="customerType"
          placeholder="Select a customer type"
          label="select customer type"
          isSubmitting={isSubmitting}
          selectItems={customerTypes}
        />
        {form.getValues("customerType") === "organization" && (
          <FormFieldInput
            formControl={form.control}
            name="organizationName"
            placeholder="Enter your organization name"
            label="Organization Name*"
            type="text"
            isSubmitting={isSubmitting}
          />
        )}

        <FormFieldInput
          formControl={form.control}
          name="name"
          placeholder="Enter your name"
          label="Name*"
          type="text"
          isSubmitting={isSubmitting}
        />
        <FormFieldInput
          formControl={form.control}
          name="email"
          placeholder="Enter your email"
          label="Email*"
          type="email"
          isSubmitting={isSubmitting}
        />
        <FormFieldInput
          formControl={form.control}
          name="mobileNo"
          placeholder="Enter your mobile number"
          label="Mobile Number*"
          type="number"
          isSubmitting={isSubmitting}
        />
        <FormFieldCommand
          form={form}
          name="state"
          placeholder="state"
          isSubmitting={isSubmitting}
          label="State"
          selectItems={states}
        />
        <FormFieldInput
          formControl={form.control}
          name="city"
          placeholder="Enter your city"
          label="City*"
          type="text"
          isSubmitting={isSubmitting}
        />
        <FormFieldInput
          formControl={form.control}
          name="zipCode"
          placeholder="Enter your zip code"
          label="Zip Code*"
          type="number"
          isSubmitting={isSubmitting}
        />
        <FormFieldInput
          formControl={form.control}
          name="landmark"
          placeholder="Enter your landmark"
          label="Landmark*"
          type="text"
          isSubmitting={isSubmitting}
        />
        <div className="col-span-12 flex justify-end">
          <Link href="/dashboard">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </Link>
          <Button
            className="bg-blue-500 text-white hover:bg-black rounded-xl"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
