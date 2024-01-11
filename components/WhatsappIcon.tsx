"use client";



import { motion } from "framer-motion";
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
        href="https://wa.me/919002520720?text=I'm%20interested%20in%20your%20business%20idea%20to%20collaborate"
        target="_blank"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
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
