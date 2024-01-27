"use client";



import { motion } from "framer-motion";

import {  MailPlus } from "lucide-react";
import QueryForm from "./QueryForm.tsx";
import { useState } from "react";

const QueryIcon = () => {
  const [isOpen,setIsOpen]=useState(false);
  const onClose=()=>{
    setIsOpen(false)
  }
  return (
    <motion.div
      className="fixed bottom-5 left-5 rounded-full shadow-md ml-4 p-1"
      style={{ zIndex: "6", left: "initial" }}

    >
        <QueryForm isOpen={isOpen} onClose={onClose} />
     
        <motion.button
          animate={{
            y: [0, -10, 0],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
          initial={{ y: 0 }}
          onClick={()=>setIsOpen(true)}
        >
       
          <MailPlus className="w-14 h-14 text-mainColor bg-slate-200 rounded-full p-2"/>
        </motion.button>
   
    </motion.div>
  );
};

export default QueryIcon;
