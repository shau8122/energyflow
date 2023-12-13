"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image, { StaticImageData } from "next/image";
import bottle3 from "@/public/bottles/2 (3).jpeg"
import { useState } from "react";

interface CardStoreProps {
  img : StaticImageData,
  title : string,
  price : number,
  setQuantity : React.Dispatch<React.SetStateAction<number>>,
  quantity : number,
}

const CardStore:React.FC<CardStoreProps> = ({
  img,
  title,
  price,
  quantity,
  setQuantity
}) => {

  const [inputValue, setInputValue] = useState<string>(String(quantity));

  const inc = () => {
    setQuantity(quantity + 1);
    setInputValue(String(quantity + 1));
  };

  const dec = () => {
    setQuantity(quantity - 1);
    setInputValue(String(quantity - 1));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numeric values in the input
    const value = event.target.value.replace(/[^0-9]/g, "");
    setInputValue(value);
    setQuantity(parseInt(value, 10) || 0);
  };

  return ( 
    <Card className="w-[400px] shadow-lg rounded-xl">
          <CardContent>
            <div>
              <div className="h-[300px] w-full relative ">
                <Image
                  src={img}
                  fill
                  alt=""
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  
                />
              </div>
              <h1 className="text-lg  text-[#0084CB] font-semibold text-justify mt-2">
                {/* 750ml Alkaline Mineral Water Drink (Glass Bottle) */}
                {title}
              </h1>
              <h2 className="text-lg font-bold text-end ">${price}</h2>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-1 justify-between">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="text-gray-700 text-sm ">Quantity:</p>
              </div>
              <div className="flex justify-between gap-3 items-center w-1/2">
                <Button
                  disabled={quantity === 0}
                  onClick={dec}
                  className="text-2xl p-3 bg-gray-200 rounded-full"
                >
                  -
                </Button>
                <Input
                  type="number"
                  min={1}
                  className="text-center"
                  value={quantity}
                  onChange={handleInputChange}
                />
                <Button
                  onClick={inc}
                  className="text-2xl p-3 bg-gray-200 rounded-full"
                >
                  +
                </Button>
              </div>
            </div>
            <Button
              className="w-full mt-2 rounded-xl bg-[#0084CB] text-white"
              variant={"outline"}
            >
              Add to cart
            </Button>
          </CardFooter>
        </Card>
   );
}
 
export default CardStore;