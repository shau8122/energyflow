import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface FormFieldSelectProps {
  formControl: any;
  name: string;
  placeholder: string;
  label: string;
  description?: string;
  isSubmitting: boolean;
  selectItems: readonly { readonly label: string; readonly value: string }[];
  onChange?: (e: string) => void;
}

const FormFieldSelect: React.FC<FormFieldSelectProps> = ({
  formControl,
  name,
  placeholder,
  label,
  isSubmitting,
  selectItems,
  onChange,
}) => {
  const handleChange=(value:string)=>{
    console.log("value:",value)
    if(onChange) onChange(value)
  }
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className="col-span-12 sm:col-span-6 xl:col-span-3 lg:col-span-4 ">
          <FormLabel>{label}</FormLabel>
          <Select
            disabled={isSubmitting}
            onValueChange={(value)=>{field.onChange(),handleChange(value)}}
            defaultValue={field.value}
            
          >
            <FormControl className="rounded-[8px]">
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent  className="bg-white text-slate-900 rounded-[8px] ">
              {selectItems.map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldSelect;
