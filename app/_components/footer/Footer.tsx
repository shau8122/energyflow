// components/Footer.tsx
"use client";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import AuthenticationModal from "@/components/AuthenticationModal";
import { useRouter } from "next/navigation";
import Hamburger from "@/components/Hamburger";
import { Button } from "@/components/ui/button";
import axios from "axios"
import toast from "react-hot-toast";

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const user = sessionStorage.getItem("user");

    const isAlreadyOpen = sessionStorage.getItem("isAlreadyOpen");
    if (!user && !isAlreadyOpen) {
      setIsOpen(true);
      sessionStorage.setItem("isAlreadyOpen", "true");
    }
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };
  const handleClick =()=>{
    axios
      .post("/api/auth/user", {
        name:"Shaukat"
      })
      .then(() => {
        toast.success("successfully sent")
      })
      .catch(() => toast.error("Something went wrong"))
      
  }
  return (
    <footer className="bg-[#50b8e7] p-5 text-center">
       <Button onClick={handleClick}>
          Click
        </Button>
      <div className="mx-auto max-w-screen-md">
        <Counter />
      </div>
      <AuthenticationModal isOpen={isOpen} onClose={onClose} />
        
        <div className="flex flex-col md:flex-row  w-full justify-around mb-5">
          <div className="flex flex-col gap-2 justify-start items-start">
            <h2 className="font-bold text-lg mb-4">Services</h2>
            <a className="text-blue-500 hover:text-blue-700">Branding</a>
            <a className="text-blue-500 hover:text-blue-700">Design</a>
            <a className="text-blue-500 hover:text-blue-700">Marketing</a>
            <a className="text-blue-500 hover:text-blue-700">Advertisement</a>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <h2 className="font-bold text-lg mb-4">Company</h2>
            <a className="text-blue-500 hover:text-blue-700">About us</a>
            <a className="text-blue-500 hover:text-blue-700">Contact</a>
            <a className="text-blue-500 hover:text-blue-700">Jobs</a>
            <a className="text-blue-500 hover:text-blue-700">Press kit</a>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <h2 className="font-bold text-lg mb-4">Legal</h2>
            <a className="text-blue-500 hover:text-blue-700">Terms of use</a>
            <a className="text-blue-500 hover:text-blue-700">Privacy policy</a>
            <a className="text-blue-500 hover:text-blue-700">Cookie policy</a>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Enerzyflow. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
