'use client'
import { useEffect, useRef, useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const RatingOptions = [
  { value: "1", label: "1-2 star" },
  { value: "2", label: "2-3 star" },
  { value: "3", label: "3-4 star" },
  { value: "4", label: "4-5 star" },
  { value: "5", label: "5 star" },
]
interface RatingFilterProps{
  setSelectedRating:(value:string)=>void
}
export const RatingFilter:React.FC<RatingFilterProps>=({
  setSelectedRating
})=> {
  const handleChange = (value: string) => {
    setSelectedRating(value);
  }
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[100px] bg-white">
        <SelectValue placeholder="Rating" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>Rating</SelectLabel>
          {
            RatingOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
