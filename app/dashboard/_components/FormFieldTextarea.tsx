import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldInputProps {
  formControl: any;
  name: string;
  placeholder: string;
  label: string;
  description?: string;
  isSubmitting: boolean;
}

const FormFieldTextArea: React.FC<FormFieldInputProps> = ({
  formControl,
  name,
  placeholder,
  label,
  isSubmitting,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className="col-span-12  lg:col-span-6 rounded-xl ">
          <FormLabel>{label}</FormLabel>
          <FormControl className="rounded-[8px]">
            <Textarea
              {...field}
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

export default FormFieldTextArea;
