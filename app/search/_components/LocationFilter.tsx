"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
type Location = {
  label: string;
  value: string;
}
interface LocationFilterProps {
  locations: Location[];
  setCity: (city: string) => void;
  city: string;
}

const LocationFilter: React.FC<LocationFilterProps> = ({ locations
  ,
  setCity,
  city,
 }) => {
  const [open, setOpen] = React.useState(false);
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {city
            ? locations.find((location) => location.value.toLocaleLowerCase() === city)?.label
            : "Select framework..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full bg-white p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className=" max-h-64 overflow-auto">
            {locations.map((location) => (
              <CommandItem
                key={location.label}
                value={location.value}
                onSelect={(currentValue) => {
                  setCity(currentValue === city ? "" : currentValue)
                  console.log(currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    city === location.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {location.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default LocationFilter;
