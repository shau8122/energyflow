import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldInputProps {
  formControl: any;
  name: string;
  placeholder: string;
  label: string;
  description?: string;
  type: string;
  isSubmitting: boolean;
}

const FormFieldInput: React.FC<FormFieldInputProps> = ({
  formControl,
  name,
  placeholder,
  label,
  type,
  isSubmitting,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 rounded-xl ">
          <FormLabel>{label}</FormLabel>
          <FormControl className="rounded-[8px]">
            <Input
              {...field}
              type={type}
              disabled={isSubmitting}
              placeholder={placeholder}
            />
          </FormControl>
          {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldInput;
