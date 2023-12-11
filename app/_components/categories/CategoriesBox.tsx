'use client'
import React from "react";
import { motion } from "framer-motion";


interface CategoriesBoxProps {
  children: React.ReactNode;
  name: string;
}

const CategoriesBox: React.FC<CategoriesBoxProps> = ({ children, name }) => {
  return (


    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:1, type:"spring"}}
     className="w-24 h-24 flex justify-between items-center flex-col p-2">
      <div className="w-1/2 hover:w-[60%] transition-all">{children}</div>
      <h1 className="text-sm text-center text-blue-900 font-semibold">{name}</h1>
    </motion.div>
    
  );
};

export default CategoriesBox;
