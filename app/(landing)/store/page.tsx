"use client";

import bottle1 from "@/public/bottles/2 (1).jpeg"
import bottle2 from "@/public/bottles/2 (2).jpeg"
import bottle3 from "@/public/bottles/2 (3).jpeg"

import CardStore from "./_components/CardStore";


const Home = () => {

  
  

  return (
    <div className="xl:w-full flex-col lg:flex-row  mx-auto max-w-screen-2xl mt-10  px-4 py-5 flex items-center justify-between  gap-3 ">
        <CardStore  img={bottle1} title="750ml Alkaline Mineral Water Drink (Glass Bottle)" price={1900} />
        <CardStore  img={bottle2} title="500ml Alkaline Mineral Water Drink (Glass Bottle)" price={1500} />
        <CardStore  img={bottle3} title="250ml Alkaline Mineral Water Drink (Glass Bottle)" price={1200} />
    </div>
  );
};
export default Home;
