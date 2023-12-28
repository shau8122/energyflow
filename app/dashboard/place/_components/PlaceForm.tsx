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
import { use, useEffect, useMemo, useState } from "react";

const baseSchema = z.object({
  orderTypes: z.enum(["customization", "branding"]),
  bottleLabel: z.enum(["yes", "no"]),
  totalQuantity: z.number().min(1, {
    message: "Total quantity must be at least 1.",
  }),
  totalPrice: z.number().min(1, {
    message: "Total price must be at least 1.",
  }),
  remark: z.string().min(2, {
    message: "Please enter your remark.",
  }),
  couponCode: z.string().min(2, {
    message: "Please enter your coupon code.",
  }),
  item: z.string().min(2, {
    message: "Please enter your item.",
  }),
  quantity: z.number().min(1, {
    message: "Quantity must be at least 1.",
  }),
  price: z.number().min(1, {
    message: "Price must be at least 1.",
  }),
  state: z.string().min(2, {
    message: "Please enter your state.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  zipCode: z.number().refine((data) => data.toString().length === 6, {
    message: "Please enter your zip code.",
  }),
  location: z.string().min(2, {
    message: "Please enter your location.",
  }),
});
const distributionSchema = baseSchema.extend({
  distributionArea: z.enum(["any", "specific"]),
});
const serviceableSpaceSchema = distributionSchema.extend({
  serviceableSpace: z.string().min(2, {
    message: "Please enter your serviceable space.",
  }),
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
const orderTypeValues = [
  { label: "Customization", value: "customization" },
  { label: "Branding", value: "branding" },
] as const;
const bottleLabels = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
] as const;
const distributionAreas = [
  { label: "Any Location", value: "any" },
  { label: "Specific Location", value: "specific" },
] as const;
const items = [
  { label: "Bottle", value: "bottle" },
  { label: "Box", value: "box" },
  { label: "Pouch", value: "pouch" },
  { label: "Can", value: "can" },
  { label: "Tin", value: "tin" },
  { label: "Jar", value: "jar" },
  { label: "Other", value: "other" },
] as const;

export const PlaceForm = () => {
  const [orderType, setOrderType] = useState("customization");
  const [distribution, setDistribution] = useState("any");
  const mainSchema =
    orderType === "customization"
      ? baseSchema
      : distribution === "any"
      ? distributionSchema
      : serviceableSpaceSchema;
  const form = useForm<z.infer<typeof mainSchema>>({
    resolver: zodResolver(mainSchema),
    defaultValues: {
      orderTypes: "customization",
      bottleLabel: "yes",
      totalQuantity: 1,
      totalPrice: 1,
      remark: "",
      couponCode: "",
      item: "",
      quantity: 1,
      price: 1,
      state: "",
      city: "",
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
  const order = form.watch("orderTypes");

  useEffect(() => {
    setOrderType(order);
  }, [order]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3 border-b-2 mb-4 pb-4">
          <FormFieldSelect
            formControl={form.control}
            name="orderTypes"
            placeholder="Select a order type"
            label="Order type"
            isSubmitting={isSubmitting}
            selectItems={orderTypeValues}
          />
          <FormFieldSelect
            formControl={form.control}
            name="bottleLabel"
            placeholder="Select a bottle label"
            label="Bottle label"
            isSubmitting={isSubmitting}
            selectItems={bottleLabels}
          />
          <FormFieldInput
            formControl={form.control}
            name="totalQuantity"
            placeholder="Enter no of bottles"
            label="Total Quantity*"
            type="number"
            isSubmitting={isSubmitting}
          />
          <FormFieldInput
            formControl={form.control}
            name="totalPrice"
            placeholder="Enter total price"
            label="Total Price*"
            type="number"
            isSubmitting={isSubmitting}
          />

          <FormFieldInput
            formControl={form.control}
            name="remark"
            placeholder="Enter remarks"
            label="Remarks*"
            type="text"
            isSubmitting={isSubmitting}
          />
          {orderType === "branding" && (
            <FormFieldSelect
              formControl={form.control}
              name="distributionArea"
              placeholder="Select a location"
              label="Distribution Area*"
              isSubmitting={isSubmitting}
              selectItems={distributionAreas}
            />
          )}
          <FormFieldInput
            formControl={form.control}
            name="couponCode"
            placeholder="Enter coupon code"
            label="Coupon Code*"
            type="text"
            isSubmitting={isSubmitting}
          />
        </div>
        <div className="grid grid-cols-12 gap-x-4 gap-y-8  px-1 md:px-3 border-t-2  pt-4">
          <FormFieldSelect
            formControl={form.control}
            name="item"
            placeholder="Select a item"
            label="Item*"
            isSubmitting={isSubmitting}
            selectItems={items}
          />
          <FormFieldInput
            formControl={form.control}
            name="quantity"
            placeholder="Enter quantity"
            label="Quantity*"
            type="number"
            isSubmitting={isSubmitting}
          />
          {distribution === "specific" && (
            <FormFieldInput
              formControl={form.control}
              name="serviceableSpace"
              placeholder="Enter serviceable space"
              label="Serviceable Space*"
              type="text"
              isSubmitting={isSubmitting}
            />
          )}
          <FormFieldInput
            formControl={form.control}
            name="price"
            placeholder="Enter price"
            label="Price*"
            type="number"
            isSubmitting={isSubmitting}
          />
          <FormFieldCommand
            selectItems={states}
            form={form}
            name="state"
            placeholder="Enter state"
            label="State*"
            isSubmitting={isSubmitting}
          />
          <FormFieldInput
            formControl={form.control}
            name="city"
            placeholder="Enter city"
            label="City*"
            type="text"
            isSubmitting={isSubmitting}
          />
          <FormFieldInput
            formControl={form.control}
            name="zipCode"
            placeholder="Enter zip code"
            label="Zip Code*"
            type="number"
            isSubmitting={isSubmitting}
          />
          <FormFieldInput
            formControl={form.control}
            name="location"
            placeholder="Enter location"
            label="Location*"
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
        </div>
      </form>
    </Form>
  );
};
