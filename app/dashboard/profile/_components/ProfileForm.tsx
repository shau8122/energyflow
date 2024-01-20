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
import { UserIndividualSchema, UserOrganizationSchema } from "@/schemas";
import { User } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { states } from "@/libs/constant";
import { Spinner } from "@/components/Spinner";
import { Pencil } from "lucide-react";

const customerTypes = [
  { label: "Individual", value: "INDIVIDUAL" },
  { label: "Organization", value: "ORGANISATION" },
] as const;

interface ProfileFormProps {
  userDetails: User | null;
}

export const ProfileForm = ({ userDetails }: ProfileFormProps) => {
  const [customerTypeValue, setCustomerTypeValue] = useState("INDIVIDUAL");
  const [isEditing,setIsEditing] = useState(false)
  const router = useRouter();
  const mainSchema =
    customerTypeValue === "ORGANISATION"
      ? UserOrganizationSchema
      : UserIndividualSchema;
  const form = useForm<z.infer<typeof mainSchema>>({
    resolver: zodResolver(mainSchema),
    defaultValues: {
      name: userDetails?.name || "",
      email: userDetails?.email || "",
      customerType: userDetails?.customerType || "INDIVIDUAL",
      mobile: userDetails?.mobile || undefined,
      state: userDetails?.state || "",
      city: userDetails?.city || "",
      pinCode: userDetails?.pinCode || undefined,
      landmark: userDetails?.landmark || "",
      ...(customerTypeValue === "ORGANISATION"
        ? { organisationName: userDetails?.organisationName || "" }
        : {}),
    },
  });

  const [loading, setLoading] = useState(false);
  const { isSubmitting } = form.formState;
  function onSubmit(values: z.infer<typeof mainSchema>) {
    setLoading(true);
    axios
      .patch(`/api/auth/user`, values)
      .then(() => {
        toast.success("user updated succesfully");
        router.refresh();
      })
      .catch((e) => {
        toast.error("something went wrong");
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const toggleEdit = () => setIsEditing((current) => !current);
  const customerType = form.watch("customerType");
  useEffect(() => {
    setCustomerTypeValue(customerType);
  }, [customerType]);
  return (
    <div className="w-full border-2 pb-3 rounded-xl">
      
      <div className="w-full h-[60px] flex items-center justify-between rounded-t-xl bg-blue-500">
        <div className="flex items-center h-full">

        <div className="text-3xl ml-2 font-semibold h-12 w-12 flex justify-center items-center rounded-full bg-white">
          👤
        </div>
        <h1 className="text-xl font-semibold text-white ml-2"> Your Profile</h1>
        </div>
        <Button className="text-white" onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-x-4 gap-y-8 mt-4  px-1 md:px-3"
        >
          <FormFieldSelect
            formControl={form.control}
            name="customerType"
            placeholder="Select a customer type"
            label="select customer type"
            isSubmitting={isSubmitting || !isEditing}
            selectItems={customerTypes}
          />
          {form.getValues("customerType") === "ORGANISATION" && (
            <FormFieldInput
              formControl={form.control}
              name="organisationName"
              placeholder="Enter your organization name"
              label="Organization Name*"
              type="text"
              isSubmitting={isSubmitting || !isEditing}
            />
          )}

          <FormFieldInput
            formControl={form.control}
            name="name"
            placeholder="Enter your name"
            label="Name*"
            type="text"
            isSubmitting={isSubmitting || !isEditing}
          />
          <FormFieldInput
            formControl={form.control}
            name="email"
            placeholder="Enter your email"
            label="Email*"
            type="email"
            isSubmitting={isSubmitting || !isEditing}
          />
          <FormFieldInput
            formControl={form.control}
            name="mobile"
            placeholder="Enter your mobile number"
            label="Mobile Number*"
            type="number"
            isSubmitting={isSubmitting || !isEditing}
          />
          <FormFieldCommand
            form={form}
            name="state"
            placeholder="state"
            isSubmitting={isSubmitting || !isEditing}
            label="State"
            selectItems={states}
          />
          <FormFieldInput
            formControl={form.control}
            name="city"
            placeholder="Enter your city"
            label="City*"
            type="text"
            isSubmitting={isSubmitting || !isEditing}
          />
          <FormFieldInput
            formControl={form.control}
            name="pinCode"
            placeholder="Enter your zip code"
            label="Zip Code*"
            type="number"
            isSubmitting={isSubmitting || !isEditing}
          />
          <FormFieldInput
            formControl={form.control}
            name="landmark"
            placeholder="Enter your landmark"
            label="Landmark*"
            type="text"
            isSubmitting={isSubmitting || !isEditing}
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
              disabled={isSubmitting}
            >
              {loading ? <Spinner /> : " Update"}
            </Button>
          </div>
          }
        </form>
      </Form>
    </div>
  );
};
