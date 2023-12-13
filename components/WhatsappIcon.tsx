"use client";

import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import whatsappIcon from "@/public/WhatsApp_icon.png";

const WhatsappIcon = () => {
  return (
    <motion.div
      className="fixed bottom-5 right-5 rounded-full shadow-md"
      style={{ zIndex: "6", left: "initial" }}

    >
      <Link
        href="https://wa.me/917654831436?text=I'm%20interested%20in%20your%20car%20for%20sale"
        target="_blank"
      >
        <motion.div
          animate={{
            y: [0, -10, 0], // Vertical movement animation
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
          initial={{ y: 0 }}
        >
          <Image src={whatsappIcon} alt="whatsapp" className="w-16 h-16" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default WhatsappIcon;
