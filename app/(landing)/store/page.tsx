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
import Image from "next/image";
import bottle1 from "@/public/bottles/2 (1).jpeg"
import bottle2 from "@/public/bottles/2 (2).jpeg"
import bottle3 from "@/public/bottles/2 (3).jpeg"
import { useState } from "react";
import CardStore from "./_components/CardStore";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

const Home = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [quantity1, setQuantity1] = useState<number>(1);
  const [quantity2, setQuantity2] = useState<number>(1);

  return (
    <div className="xl:w-full flex-col lg:flex-row  mx-auto max-w-screen-2xl mt-10  px-4 py-5 flex items-center justify-between  gap-3 ">
        <CardStore quantity={quantity} setQuantity={setQuantity} img={bottle1} title="750ml Alkaline Mineral Water Drink (Glass Bottle)" price={1900} />
        <CardStore quantity={quantity1} setQuantity={setQuantity1} img={bottle2} title="500ml Alkaline Mineral Water Drink (Glass Bottle)" price={1500} />
        <CardStore quantity={quantity2} setQuantity={setQuantity2} img={bottle3} title="250ml Alkaline Mineral Water Drink (Glass Bottle)" price={1200} />
    </div>
  );
};
export default Home;
