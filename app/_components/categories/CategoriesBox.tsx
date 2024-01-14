'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/Spinner";


interface CategoriesBoxProps {
  icon:string,
  name: string;
}

const CategoriesBox: React.FC<CategoriesBoxProps> = ({ icon, name }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const handleClick=()=>{
    setLoading(true)
    if(name!=='more'){
      router.push("/search?query=" + name)
    }
    setLoading(false)
  }
  return (
    <motion.div
      
    initial={{y:50,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:1, type:"spring"}}
     className=" h-32 flex justify-around sm:justify-between items-center flex-row sm:flex-col p-4 my-3 shadow-md rounded-xl">
      <h1 className="text-4xl text-center">
        {loading ?<Spinner size={"lg"} />:<>{icon}</>}
        
      </h1>
      <h1 className="text-sm text-center text-slate-900 font-semibold">{name.slice(0,25)}</h1>
    </motion.div>
    
  );
};

export default CategoriesBox;
