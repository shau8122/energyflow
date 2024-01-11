import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/libs/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
interface FormFieldSelectProps {
  form: any;
  name: string;
  placeholder: string;
  label: string;
  description?: string;
  isSubmitting: boolean;
  selectItems: readonly {readonly label:string,readonly value:string}[]
}

const FormFieldCommand:React.FC<FormFieldSelectProps> = ({
  form,
  name,
  placeholder,
  label,
  description,
  isSubmitting,
  selectItems
}) => {
  const [open, setOpen] = useState(false);
  return ( 
    <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 rounded-xl mt-[10px] ">
              <FormLabel>{label}</FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl className="rounded-[8px]">
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? selectItems.find((selectItem) => selectItem.value === field.value)
                            ?.label
                        : `Select ${placeholder}`}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full rounded-[8px] bg-white">
                  <Command>
                    <CommandInput
                      disabled={isSubmitting}
                      placeholder={`Search ${placeholder}...`}
                    />
                    <CommandEmpty>No {placeholder} found.</CommandEmpty>
                    <CommandGroup className="h-[200px] overflow-auto">
                      {selectItems.map((selectItem) => (
                        <CommandItem
                          value={selectItem.label}
                          key={selectItem.value}
                          onSelect={() => {
                            form.setValue(name, selectItem.value);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectItem.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {selectItem.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
   );
}
 
export default FormFieldCommand;