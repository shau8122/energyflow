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

const mainSchema = z.object({
  name: z.string().min(3, "Too Short!").max(50, "Too Long!"),
  fileUrl: z.string().min(3, "Too Short!").max(50, "Too Long!"),
  imgUrl: z.string().min(3, "Too Short!").max(50, "Too Long!"),
})



export const LabelsForm = () => {
 
  const form = useForm<z.infer<typeof mainSchema>>({
    resolver: zodResolver(mainSchema),
    defaultValues: {
      name:""
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
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3 ">
        <FormFieldInput formControl={form.control} name="name" type="text" label="Design Name" placeholder="Name" isSubmitting={isSubmitting} />
        <FormFieldInput formControl={form.control} name="fileUrl" type="file" label="Select a cdr file" placeholder="Select a cdr file" isSubmitting={isSubmitting} />
        <FormFieldInput formControl={form.control} name="imgUrl" type="file" label="Select a png file" placeholder="Select a png file" isSubmitting={isSubmitting} />
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
