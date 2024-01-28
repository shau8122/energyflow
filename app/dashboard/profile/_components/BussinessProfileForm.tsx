"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import FormFieldInput from "../../_components/FormFieldInput";

import {  bussinessSchema } from "@/schemas";

import axios from 'axios'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import FormFieldTextArea from "../../_components/FormFieldTextarea";
import { Bussiness } from "@prisma/client";
import { Spinner } from "@/components/Spinner";
import { useState } from "react";


interface BussinessProfileFormProps{
  bussinessDetails: Bussiness | null,
  isEditing: boolean
}

export const BussinessProfileForm:React.FC<BussinessProfileFormProps> = ({
  bussinessDetails,
  isEditing
}) => {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof bussinessSchema>>({
    resolver: zodResolver(bussinessSchema),
    defaultValues: {
      title:bussinessDetails?.title || "",
      address: bussinessDetails?.address||"",
      about:bussinessDetails?.about||"",
      price:bussinessDetails?.price || 0,
      discount:bussinessDetails?.discount || 0,
      mobile: bussinessDetails?.mobile || undefined
    },
  });
  

  const { isSubmitting, isValid } = form.formState;
  function onSubmit(values: z.infer<typeof bussinessSchema>) {
    if(bussinessDetails==null){
      setLoading(true)
      axios.post(`/api/auth/bussiness`,values)
      .then(()=>{
        toast.success("Bussiness profile created succesfully")
      })
      .catch((e)=>{
        toast.error('something went wrong')
        console.log(e)
      }).
      finally(()=>{
        setLoading(false)
      })
    }else{
      setLoading(true)
      axios.patch(`/api/auth/bussiness`,values)
      .then(()=>{
        toast.success("Bussiness profile updated succesfully")
      })
      .catch((e)=>{
        toast.error('something went wrong')
        console.log(e)
      }).finally(()=>{
        setLoading(false)
      })
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3"
      >
        <FormFieldInput
          formControl={form.control}
          name="title"
          placeholder="Enter your bussiness title name"
          label="Title*"
          type="text"
          isSubmitting={isSubmitting || loading || !isEditing}
        />
        <FormFieldInput
          formControl={form.control}
          name="mobile"
          placeholder="Enter your mobile number"
          label="Mobile Number*"
          type="number"
          isSubmitting={isSubmitting || loading || !isEditing}
        />
        <FormFieldInput
          formControl={form.control}
          name="price"
          placeholder="Enter price"
          label="Price"
          type="number"
          isSubmitting={isSubmitting || loading || !isEditing}
        />
        <FormFieldInput
          formControl={form.control}
          name="discount"
          placeholder="Enter discount %"
          label="Discount"
          type="number"
          isSubmitting={isSubmitting || loading || !isEditing}
        />
        <FormFieldTextArea
          formControl={form.control}
          name="address"
          placeholder="Enter your full address"
          label="Address*"
          isSubmitting={isSubmitting || loading || !isEditing}
        />
        <FormFieldTextArea
          formControl={form.control}
          name="about"
          placeholder="Enter about your bussiness"
          label="About*"
          isSubmitting={isSubmitting || loading || !isEditing}
        />
        {
          isEditing && 
        <div className="col-span-12 flex justify-end">
          <Link href="/dashboard">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </Link>
          <Button
            className="bg-blue-500 text-white hover:bg-black rounded-xl"
            type="submit"
            disabled={isSubmitting || loading}
          >
            {loading ? <Spinner /> : " Submit"}
          </Button>
        </div>
        }
      </form>
    </Form>
  );
};
