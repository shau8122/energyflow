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
import { states } from "@/libs/constant";
import { BrandingOrderSchema, CustomisationOrderSchema } from "@/schemas";



const orderTypeValues = [
  { label: "Customization", value: "CUSTOMISATION" },
  { label: "Branding", value: "BRANDING" },
] as const;
const bottleLabels = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
] as const;
const distributionAreas = [
  { label: "Any Location", value: "ANY" },
  { label: "Specific Location", value: "SPECIFIC" },
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

export const  PlaceForm = () => {
  const [orderType, setOrderType] = useState("CUSTOMISATION");
  const [distributionType, setDistributionType] = useState("any");
  const mainSchema =orderType =='CUSTOMISATION' ? CustomisationOrderSchema:BrandingOrderSchema;
  const form = useForm<z.infer<typeof mainSchema>>({
    resolver: zodResolver(mainSchema),
    defaultValues: {
      orderTypes: "CUSTOMISATION",
      bottleLabel: "",
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
          {orderType === "BRANDING" && (
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
          {distributionType === "specific" && (
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
