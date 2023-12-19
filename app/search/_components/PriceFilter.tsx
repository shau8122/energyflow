'use client'
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface PriceFilterProps{
  value:number;
  setValue:(value:number)=>void;
  maxValue:number;
  minValue:number;
}

const PriceFilter:React.FC<PriceFilterProps> = ({
  value,
  setValue,
  maxValue,
  minValue
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }
  return ( 
    <div className="">
      <div className="">Price Range from {minValue} to {maxValue}</div>
    
      <Input onChange={handleChange} type="range" name="volume" min={minValue} max={maxValue} value={value}/>
      Greater than {value}
    </div>
   );
}
 
export default PriceFilter;