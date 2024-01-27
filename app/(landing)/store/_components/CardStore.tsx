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

import Image, { StaticImageData } from "next/image";

import { useMemo, useState } from "react";
import { formatPrice } from "@/libs/format";
import { useStore } from "@/store/store";

interface CardStoreProps {
  img: StaticImageData;
  title: string;
  price: number;
}

const CardStore: React.FC<CardStoreProps> = ({
  img,
  title,
  price,
  
}) => {
  const [quantity,setQuantity] = useState(1);
  const addOrder = useStore((state)=>state.addOrder)
  const [inputValue, setInputValue] = useState<string>(String(quantity));
  const FormattedPrice= useMemo(() => formatPrice(price), [price]);
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
  const handleOrder=()=>{
    const newOrder = {
      title:title,
      quantity:quantity,
      price:price,
      img:img
    }
    addOrder(newOrder)
  }
  return (
    <Card className="w-[400px] bg-[#ddd] shadow-lg rounded-xl">
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
          <h1 className="text-lg  text-mainColor font-semibold text-justify mt-2">
            {/* 750ml Alkaline Mineral Water Drink (Glass Bottle) */}
            {title}
          </h1>
          <h2 className="text-lg font-bold text-end ">{FormattedPrice}</h2>
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
          onClick={handleOrder}
          className="w-full mt-2 rounded-xl font-semibold text-[16px] hover:bg-black text-white bg-mainColor "
        >
          <h1 className="text-lg mx-2">Add to Cart</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardStore;
