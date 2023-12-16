'use client'
import React from "react";
import { motion } from "framer-motion";


interface CategoriesBoxProps {
  icon:string,
  name: string;
}

const CategoriesBox: React.FC<CategoriesBoxProps> = ({ icon, name }) => {
  return (


    <motion.div
    initial={{y:50,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:1, type:"spring"}}
     className=" h-32 flex justify-around sm:justify-between items-center flex-row sm:flex-col p-4 my-3 shadow-md rounded-xl">
      <h1 className="text-4xl text-center">{icon}</h1>
      <h1 className="text-sm text-center text-blue-900 font-semibold">{name.slice(0,25)}</h1>
    </motion.div>
    
  );
};

export default CategoriesBox;
