// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";

// import * as z from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Check, ChevronsUpDown } from "lucide-react";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command";
// import { cn } from "@/lib/utils";
// import toast from "react-hot-toast";
// import { useState } from "react";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   orderType: z.enum(["customization", "branding"]),
//   bottleLabel: z.string().min(2, {
//     message: "Please select bottle label.",
//   }),
//   totalQuantity: z.number().min(1, {
//     message: "Please enter total quantity.",
//   }),
//   totalPrice: z.number().min(1, {
//     message: "Please enter total price.",
//   }),
//   remarks: z.string().min(2, {
//     message: "Please enter remarks.",
//   }),
//   couponCode: z.string(),
//   item: z.string().min(2, {
//     message: "Please enter item.",
//   })
//   organisationName: z.string(),
//   email: z.string().email(),
//   mobileNo: z.string().min(10, {
//     message: "Mobile number must be at least 10 characters.",
//   }),
//   state: z.string().min(2, {
//     message: "please select a state",
//   }),
//   city: z.string().min(2, {
//     message: "Please enter your city name.",
//   }),
//   zipCode: z.string().min(6, {
//     message: "Zip code must be at least 6 characters.",
//   }),
//   landmark: z.string().min(2, {
//     message: "Please enter your landmark.",
//   }),
// });
// const states = [
//   { label: "Andhra Pradesh", value: "Andhra Pradesh" },
//   { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
//   { label: "Assam", value: "Assam" },
//   { label: "Bihar", value: "Bihar" },
//   { label: "Chhattisgarh", value: "Chhattisgarh" },
//   { label: "Goa", value: "Goa" },
//   { label: "Gujarat", value: "Gujarat" },
//   { label: "Haryana", value: "Haryana" },
//   { label: "Himachal Pradesh", value: "Himachal Pradesh" },
//   { label: "Jharkhand", value: "Jharkhand" },
//   { label: "Karnataka", value: "Karnataka" },
//   { label: "Kerala", value: "Kerala" },
//   { label: "Madhya Pradesh", value: "Madhya Pradesh" },
//   { label: "Maharashtra", value: "Maharashtra" },
//   { label: "Manipur", value: "Manipur" },
//   { label: "Meghalaya", value: "Meghalaya" },
//   { label: "Mizoram", value: "Mizoram" },
//   { label: "Nagaland", value: "Nagaland" },
//   { label: "Odisha", value: "Odisha" },
//   { label: "Punjab", value: "Punjab" },
//   { label: "Rajasthan", value: "Rajasthan" },
//   { label: "Sikkim", value: "Sikkim" },
//   { label: "Tamil Nadu", value: "Tamil Nadu" },
//   { label: "Telangana", value: "Telangana" },
//   { label: "Tripura", value: "Tripura" },
//   { label: "Uttar Pradesh", value: "Uttar Pradesh" },
//   { label: "Uttarakhand", value: "Uttarakhand" },
//   { label: "West Bengal", value: "West Bengal" },
//   {
//     label: "Andaman and Nicobar Islands",
//     value: "Andaman and Nicobar Islands",
//   },
//   { label: "Chandigarh", value: "Chandigarh" },
//   {
//     label: "Dadra and Nagar Haveli and Daman and Diu",
//     value: "Dadra and Nagar Haveli and Daman and Diu",
//   },
//   { label: "Lakshadweep", value: "Lakshadweep" },
//   { label: "Delhi", value: "Delhi" },
//   { label: "Puducherry", value: "Puducherry" },
//   { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
//   { label: "Ladakh", value: "Ladakh" },
// ] as const;
// export const PlaceForm = () => {
//   const [open, setOpen] = useState(false);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),

//     defaultValues: {
//       name: "",
//       email: "",
//       customerType: "individual",
//       mobileNo: "",
//       state: "",
//       city: "",
//       zipCode: "",
//       landmark: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//     // toast({
//     //   title: "You submitted the following values:",
//     //   description: (
//     //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//     //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//     //     </pre>
//     //   ),
//     // })
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3 "
//       >
//         <FormField
//           control={form.control}
//           name="customerType"
//           render={({ field }) => (
//             <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl ">
//               <FormLabel>select customer type</FormLabel>
//               <Select onValueChange={field.onChange} defaultValue={field.value}>
//                 <FormControl>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select a customer type" />
//                   </SelectTrigger>
//                 </FormControl>
//                 <SelectContent className="bg-slate-100 text-slate-900">
//                   <SelectItem value="individual">Individual</SelectItem>
//                   <SelectItem value="organisation">Organisation</SelectItem>
//                 </SelectContent>
//               </Select>
//               {/* <FormDescription>
//                 You can manage email addresses in your{" "}
//                 <Link href="/examples/forms">email settings</Link>.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         {form.getValues("customerType") === "organisation" && (
//           <FormField
//             control={form.control}
//             name="organisationName"
//             render={({ field }) => (
//               <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl ">
//                 <FormLabel>Organisation Name*</FormLabel>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     type="text"
//                     placeholder="Enter organisation name"
//                   />
//                 </FormControl>
//                 {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         )}
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl ">
//               <FormLabel>Name*</FormLabel>
//               <FormControl>
//                 <Input {...field} type="text" placeholder="Enter your name" />
//               </FormControl>
//               {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl ">
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input {...field} type="email" placeholder="Enter your email" />
//               </FormControl>
//               {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="mobileNo"
//           render={({ field }) => (
//             <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl ">
//               <FormLabel>Mobile No</FormLabel>
//               <FormControl>
//                 <Input {...field} type="text" placeholder="Enter mobile no" />
//               </FormControl>
//               {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="state"
//           render={({ field }) => (
//             <FormItem className="flex flex-col col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl mt-[10px] ">
//               <FormLabel>State</FormLabel>
//               <Popover open={open} onOpenChange={setOpen}>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={open}
//                       className={cn(
//                         "w-full justify-between",
//                         !field.value && "text-muted-foreground"
//                       )}
//                     >
//                       {field.value
//                         ? states.find((state) => state.value === field.value)
//                             ?.label
//                         : "Select state"}
//                       <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-full bg-white">
//                   <Command>
//                     <CommandInput placeholder="Search state..." />
//                     <CommandEmpty>No language found.</CommandEmpty>
//                     <CommandGroup>
//                       {states.map((state) => (
//                         <CommandItem
//                           value={state.label}
//                           key={state.value}
//                           onSelect={() => {
//                             form.setValue("state", state.value);
//                             setOpen(false);
//                           }}
//                         >
//                           <Check
//                             className={cn(
//                               "mr-2 h-4 w-4",
//                               state.value === field.value
//                                 ? "opacity-100"
//                                 : "opacity-0"
//                             )}
//                           />
//                           {state.label}
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>
//               {/* <FormDescription>
//                 This is the language that will be used in the dashboard.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="city"
//           render={({ field }) => (
//             <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl ">
//               <FormLabel>City</FormLabel>
//               <FormControl>
//                 <Input {...field} type="text" placeholder="Enter your city" />
//               </FormControl>
//               {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="zipCode"
//           render={({ field }) => (
//             <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl ">
//               <FormLabel>Zip Code</FormLabel>
//               <FormControl>
//                 <Input {...field} type="text" placeholder="Enter zip code" />
//               </FormControl>
//               {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="landmark"
//           render={({ field }) => (
//             <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-xl ">
//               <FormLabel>Landmark</FormLabel>
//               <FormControl>
//                 <Input {...field} type="text" placeholder="Enter landmark" />
//               </FormControl>
//               {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="col-span-12 flex justify-end">
//           <Button
//             variant="outline"
//             className="mr-2 rounded-xl bg-black text-white hover:bg-gray-700 hover:text-white "
//           >
//             Cancel
//           </Button>
//           <Button
//             className="bg-blue-500 text-white hover:bg-black rounded-xl"
//             type="submit"
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };
