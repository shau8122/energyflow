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

interface LocationFilterProps {
  location: string[];
}

const LocationFilter: React.FC<LocationFilterProps> = ({ location }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? location.findIndex((item) => item === value) !== -1
              ? "Location found!"
              : "Location not found"
            : "Select location..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full bg-white p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {location.map((framework) => (
              <CommandItem
                key={framework}
                value={framework}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default LocationFilter;
