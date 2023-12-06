"use client";

import * as z from "zod";
// import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import signIn from "@/firebase/auth/signin";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

const CreatePage =() => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    // try {
    //   const response = await axios.post("/api/courses", values);
    //   router.push(`/teacher/courses/${response.data.id}`);
    //   toast.success("Course created");
    // } catch {
    //   toast.error("Something went wrong");
    // }
    const { result, error } = await signIn(values.email, values.password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
  }

  return ( 
    <div className="md:w-[500px]  w-[400px] mx-auto flex  items-center justify-center h-full md:p-6 p-2">
      <div className="w-full bg-[#edf7fc] text-[#50b8e7] rounded-xl   shadow-md md:p-4 p-2">
        <h1 className="text-2xl text-center font-semibold">
          Sign up to Enerzyflow 
        </h1>
        {/* <p className="text-sm text-slate-600">
          What would you like to name your course? Don&apos;t worry, you can change this later.
        </p> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Enter Your Email:
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'example@gmail.com'"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    What will you teach in this course?
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Enter Password:
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isSubmitting}
                      placeholder="Enter a strong password"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    What will you teach in this course?
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Confirm Password:
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    What will you teach in this course?
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button
                  type="button"
                  variant="ghost"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
   );
}
 
export default CreatePage;