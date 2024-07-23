// components/Footer.tsx
"use client";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import AuthenticationModal from "@/components/AuthenticationModal";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import toast from "react-hot-toast";
import {
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Linkedin,
  LinkedinIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Footer: React.FC = () => {
  const user = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isAlreadyOpen = sessionStorage.getItem("isAlreadyOpen");

    const timeoutId = setTimeout(() => {
      if (!user && !isAlreadyOpen) {
        setIsOpen(true);
        sessionStorage.setItem("isAlreadyOpen", "true");
      }
    }, 5000);

    // Clear the timeout to avoid unnecessary side effects
    return () => clearTimeout(timeoutId);

    // Add 'user' to the dependency array if it's used inside the effect
  }, [user]);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <footer className="bg-[#50b8e7] p-5 text-center">
      <div className="max-w-7xl mx-auto">
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
        <div className="grid grid-cols-4 gap-4 my-1 max-w-xs mx-auto w-[90%] text-[2em] text-blue-700  ">
          <div className="hover:translate-y-[-10px] flex justify-center items-center text-lg bg-white px-1 py-2 rounded-xl  transition-all ease-in-out duration-150">
            <Link href="http://facebook.com" className="bg-white">
              <Facebook size={30} />
            </Link>
          </div>
          <div className="hover:translate-y-[-10px] flex justify-center items-center text-lg bg-white px-1 py-2 rounded-xl  transition-all ease-in-out duration-150">
            <Link href="http://twitter.com" className="bg-white">
              <Twitter size={30} />
            </Link>
          </div>
          <div className="hover:translate-y-[-10px] flex justify-center items-center text-lg bg-white px-1 py-2 rounded-xl  transition-all ease-in-out duration-150">
            <Link
              href="https://www.instagram.com/enerzyflow/?igsh=MTRiZzkwMGs1dHNvNQ%3D%3D"
              target="_blank"
              className="bg-white"
            >
              <Instagram size={30} />
            </Link>
          </div>
          <div className="hover:translate-y-[-10px] flex justify-center items-center text-lg bg-white px-1 py-2 rounded-xl  transition-all ease-in-out duration-150">
            <Link href="http://linkedin.com" className="bg-white">
              <Linkedin size={30} />
            </Link>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Enerzyflow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
