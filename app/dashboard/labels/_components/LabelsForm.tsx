"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import axios from 'axios'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import FormFieldInput from "../../_components/FormFieldInput";

import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useRouter } from "next/navigation";

const mainSchema = z.object({
  name: z.string().min(3, "Too Short!").max(50, "Too Long!"),
});

export const LabelsForm = () => {
  const form = useForm<z.infer<typeof mainSchema>>({
    resolver: zodResolver(mainSchema),
    defaultValues: {
      name: "",
    },
  });
  const [cdrFile, setCdrFile] = useState<File | undefined>();
  const [imgFile, setImgFile] = useState<File | undefined>();
  const [cdrUrl ,setCdrUrl] = useState("");
  const [imgUrl,setImageUrl]=useState("");
  const router = useRouter()

  const { isSubmitting, isValid } = form.formState;
  function onSubmit(values: z.infer<typeof mainSchema>) {
    if(cdrUrl==="" || imgUrl ===""){
      return;
    }
    const valuesWithUrl = {
      name:values.name,
      cdrUrl,imgUrl
    }
    axios.post( `/api/auth/label`,valuesWithUrl)
    .then((res)=>{
      toast.success("label created successfully");
      console.log(res)
      window.location.reload()
    }).catch((e)=>{
      toast.error("Something went wrong");
      console.log(e);
    })

  }
  const uploadPost = async (selectedFile: File) => {
  
  
    const imageRef = ref(storage, `images/${selectedFile.name}`);
  
    try {
      // Upload the file
      await uploadBytes(imageRef, selectedFile);
  
      // Get the download URL
      const downloadUrl = await getDownloadURL(imageRef);
  
      // Do something with the download URL (e.g., save it to a database)
      console.log('File available at', downloadUrl);
      return downloadUrl;
    } catch (error) {
      // Handle errors
      console.error('Error uploading file:', error);
    }
  
    // setLoading(false);
  };

  const handleCdrFileChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCdrFile(file);
      const url =await uploadPost(file)
      if(url){
        setCdrUrl(url);
      }
    }
  };
  const handleImgFileChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgFile(file);
      const url = await uploadPost(file)
      if(url){
        setImageUrl(url);
      }
    }
  };
  return (
    <Form {...form}>
      
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3 "
      >
        <FormFieldInput
          formControl={form.control}
          name="name"
          type="text"
          label="Design Name"
          placeholder="Name"
          isSubmitting={isSubmitting}
        />
       
       <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 rounded-xl">
          <FormLabel>Select a cdr file</FormLabel>
          <FormControl className="rounded-[8px]">
            <Input
              type="file"
              onChange={handleCdrFileChange}
              disabled={isSubmitting}
              placeholder="Select a cdr file"
              size={50 * 1024 * 1024}
            />
          </FormControl>
          <FormDescription>File size should be below 50 mb.</FormDescription>
          <FormMessage />
        </FormItem>
        
      

       
        <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 rounded-xl">
          <FormLabel>Select a png file</FormLabel>
          <FormControl className="rounded-[8px]">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImgFileChange}
              disabled={isSubmitting}
              placeholder="Select a png file"
              size={5 * 1024 * 1024}
            />
          </FormControl>
          <FormDescription>File size should be below 5 mb.</FormDescription>
          <FormMessage />
        </FormItem>

        
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
