"use client";
import axios from 'axios'
import Modal from "./Modal";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { Spinner } from "./Spinner";
import toast from 'react-hot-toast';
import { useState } from 'react';

interface QueryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const queryFormSchema = z.object({
  email: z.string().email().trim(),
  query: z.string().min(10, {
    message: "Query should have atleast 10 characters",
  }),
});
const QueryForm: React.FC<QueryFormModalProps> = ({ isOpen, onClose }) => {
  const [loading,setLoading] = useState(false)

  const form = useForm<z.infer<typeof queryFormSchema>>({
    resolver: zodResolver(queryFormSchema),
    defaultValues: {
      email: "",
      query: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  function onSubmit(values: z.infer<typeof queryFormSchema>) {
    setLoading(true)
    console.log(values)
    axios.post(`/api/auth/sendQuery`,values)
    .then(()=>{
      toast.success("Sent succesfully")
      form.reset()
    })
    .catch((e)=>{
      toast.error('something went wrong')
      console.log(e)
    }).finally(()=>{
      setLoading(false)
      onClose()})
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full bg-[#edf7fc] text-slate-500  p-2">
        <h1 className="text-2xl text-center text-[#50b8e7] font-semibold">
          Write your query to Enerzyflow
        </h1>
        <div className="flex flex-col justify-between mt-6 gap-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3"
            >
              <FormField
                control={form.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem className="col-span-12  rounded-xl ">
                    <FormLabel>Email*</FormLabel>
                    <FormControl className="rounded-[8px]">
                      <Input
                        {...field}
                        type={"email"}
                        disabled={isSubmitting}
                        placeholder={"example@gmail.com"}
                      />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem className="col-span-12   rounded-xl ">
                    <FormLabel>Write your query</FormLabel>
                    <FormControl className="rounded-[8px]">
                      <Textarea
                        {...field}
                        disabled={isSubmitting}
                        placeholder={"ask you doubts?"}
                      />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-12 flex justify-end">
                <Button onClick={onClose} type="button" variant="ghost">
                  Cancel
                </Button>

                <Button
                  className="bg-blue-500 text-white hover:bg-black rounded-xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {loading ? <Spinner /> : " Submit"}
               </Button>
                
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default QueryForm;
