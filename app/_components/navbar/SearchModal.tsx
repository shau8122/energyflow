"use client";
import axios from 'axios'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useState } from 'react';
import Modal from '@/components/Modal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/Spinner';
import { useRouter } from 'next/navigation';

interface QueryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const queryFormSchema = z.object({

  query: z.string().min(2, {
    message: "Query should have atleast 2 characters",
  }),
});
const SearchModal: React.FC<QueryFormModalProps> = ({ isOpen, onClose }) => {
  const [loading,setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof queryFormSchema>>({
    resolver: zodResolver(queryFormSchema),
    defaultValues: {
      query: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  function onSubmit(values: z.infer<typeof queryFormSchema>) {
    setLoading(true)
    console.log(values)
    router.push("/search?query=" + values.query)
    
    setLoading(false)
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full bg-[#edf7fc] text-slate-500  p-2">
        {/* <h1 className="text-2xl text-center text-[#50b8e7] font-semibold">
          Search your query to Enerzyflow
        </h1> */}
        <div className="flex flex-col justify-between gap-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3"
            >
              <FormField
                control={form.control}
                name={"query"}
                render={({ field }) => (
                  <FormItem className="col-span-12  rounded-xl ">
                    {/* <FormLabel>Email*</FormLabel> */}
                    <FormControl className="rounded-[8px]">
                      <Input
                        {...field}
                        type={"text"}
                        disabled={isSubmitting}
                        placeholder={"search..."}
                      />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
            

              <div className="col-span-12 flex justify-end">
                <Button onClick={()=>{
                  onClose();
                  setLoading(false);
                  form.reset()
                }} type="button" variant="ghost">
                  Cancel
                </Button>

                <Button
                  className="bg-blue-500 text-white hover:bg-black rounded-xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {loading ? <Spinner /> : " Search"}
               </Button>
                
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
