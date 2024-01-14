"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import FormFieldInput from "../../_components/FormFieldInput";
import FormFieldSelect from "../../_components/FormFieldSelect";
import FormFieldCommand from "../../_components/FormFieldCommand";
import { useMemo, useState } from "react";
import { states } from "@/libs/constant";
import { CustomisationOrderSchema } from "@/schemas";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import axios from "axios"
import { useRouter } from "next/navigation";

const orderTypeValues = [
  { label: "Customization", value: "CUSTOMISATION" },
  { label: "Branding", value: "BRANDING" },
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
interface PlaceFormProps{
  labelNames:{
    id:string,
    name:string
  }[]
}
export const PlaceForm = ({labelNames}:PlaceFormProps) => {
  const [orderType, setOrderType] = useState("");
  const [distributionArea, setDistributionArea] = useState("ANY");
  const [serviceableSpace, setServiceableSpace] = useState("");
  const router = useRouter();
  const labels = useMemo(() => {
    if (labelNames) {
      return labelNames.map((labelName) => ({ label: labelName.name, value: labelName.id }));
    }
    return []; 
  }, [labelNames]); 
  
  const form = useForm<z.infer<typeof CustomisationOrderSchema>>({
    resolver: zodResolver(CustomisationOrderSchema),
    defaultValues: {
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
      landmark: "",
    },
  });
  const { isSubmitting,defaultValues } = form.formState;
  function onSubmit(values: z.infer<typeof CustomisationOrderSchema>) {
    let updatedValues;
    if (orderType == "CUSTOMISATION") {
      updatedValues = {
        ...values,
        orderType: orderType,
      };
      console.log(updatedValues);
    } else {
      if (distributionArea == "SPECIFIC") {
        if (serviceableSpace == "") {
          toast.error("please enter space name");
        } else {
           updatedValues = {
            ...values,
            orderType,
            distributionArea,
            serviceableSpace,
          };
          console.log(updatedValues);
        }
      } else {
        updatedValues = {
          ...values,
          orderType,
          distributionArea,
        };
        console.log(updatedValues);
      }
    }
    console.log(updatedValues)

    axios.post(`/api/auth/order`,updatedValues)
    .then(()=>{
      toast.success("user updated succesfully")
      setDistributionArea("ANY")
      setServiceableSpace("")
      setOrderType("")
      form.reset()

    })
    .catch((e)=>{
      toast.error('something went wrong')
      console.log(e)
    })
  }
  // const onChangeLocation = (e: string) => {
  //   setDistributionType(e);
  // };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3 border-b-2 mb-4 pb-4">
          <FormField
            name="orderTypes"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-6 xl:col-span-3 lg:col-span-4 ">
                <FormLabel>Order type</FormLabel>
                <Select
                  disabled={isSubmitting}
                  onValueChange={(value) => setOrderType(value)}
                  defaultValue={orderType}
                >
                  <FormControl className="rounded-[8px]">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a order type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-slate-900 rounded-[8px] ">
                    {orderTypeValues.map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {orderType === "CUSTOMISATION" && (
            <>
              <FormFieldSelect
                formControl={form.control}
                name="bottleLabel"
                placeholder="Select a bottle label"
                label="Bottle label"
                isSubmitting={isSubmitting}
                selectItems={labels}
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
              <FormFieldInput
                formControl={form.control}
                name="couponCode"
                placeholder="Enter coupon code"
                label="Coupon Code*"
                type="text"
                isSubmitting={isSubmitting}
              />
            </>
          )}
          {orderType === "BRANDING" && (
            <>
              <FormFieldSelect
                formControl={form.control}
                name="bottleLabel"
                placeholder="Select a bottle label"
                label="Bottle label"
                isSubmitting={isSubmitting}
                selectItems={labels}
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

              <FormField
                name="distributionArea"
                render={({ field }) => (
                  <FormItem className="col-span-12 sm:col-span-6 xl:col-span-3 lg:col-span-4 ">
                    <FormLabel>Distribution Area*</FormLabel>
                    <Select
                      disabled={isSubmitting}
                      onValueChange={(value) => setDistributionArea(value)}
                      defaultValue={field.value}
                    >
                      <FormControl className="rounded-[8px]">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white text-slate-900 rounded-[8px] ">
                        {distributionAreas.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormFieldInput
                formControl={form.control}
                name="couponCode"
                placeholder="Enter coupon code"
                label="Coupon Code*"
                type="text"
                isSubmitting={isSubmitting}
              />
            </>
          )}
        </div>
        {orderType != "" && (
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
            {distributionArea === "SPECIFIC" && (
              <FormFieldInput
                formControl={form.control}
                name="serviceableSpace"
                placeholder="Select Serviceable Space"
                label="Select Serviceable Space"
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
              name="pinCode"
              placeholder="Enter zip code"
              label="Zip Code*"
              type="text"
              isSubmitting={isSubmitting}
            />
            <FormFieldInput
              formControl={form.control}
              name="landmark"
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
        )}
      </form>
    </Form>
  );
};
