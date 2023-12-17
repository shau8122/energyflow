"use client";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Hamburger from "@/components/Hamburger";
import { Input } from "@/components/ui/input";

import { ShoppingCartButton } from "./ShoppingCartButton";
import { UserMenuButton } from "./UserMenuButton";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  mobile?: boolean;
}
const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className,
  mobile,
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      <p
        className={`${
          mobile ? "text-3xl" : "text-lg"
        } text-[#0084CB] font-semibold`}
      >
        {title}
      </p>
      <span
        className={`
        h-[2px] 
          inline-block bg-[#0084CB]
          absolute 
          left-0 
          -bottom-0.5 
          group-hover:w-full 
          transition-[width] 
          ease
          duration-300
          ${pathname === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  

  const handleSearch = () => {
    if (search.length === 0) return;
    router.push("/search?query=" + search);
  };
  {/* //  bg-[#b9e2f5]/95   */}
  return (
    
      <div className="w-full mx-auto max-w-screen-2xl  flex lg:flex-row flex-col ">
        <div className="lg:w-[35%]  w-full mx-auto  flex justify-center items-center">
          <div className="w-[100px] h-[50px] md:w-[200px] md:h-[100px] relative">
            <Image
              src="/MainLogo3.png"
              fill
              style={{
                objectFit: "contain",
              }}
              sizes="100"
              alt={"logo"}
            />
          </div>
          <div className="w-1 hidden sm:block rounded-xl h-3/4 ml-[2px] mr-1 bg-[#0084CB]/50" />
          <h1 className="text-sm hidden sm:block xl:text-lg font-semibold text-[#0084CB]">
            Sail your Business Ship,
            <br />
            With our enerZy Sip
          </h1>
        </div>
        <div className="lg:hidden w-full items-center my-1 flex">
          <form action={handleSearch} className="flex-1 mx-4 relative">
            <Input
              className="text-[16px]  p-3 text-[#0084CB]/75"
              type="text"
              placeholder="Find your interest"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="pr-4">
            <Hamburger>
              <CustomLink mobile title="Home" href="/" className="mr-4" />
              <CustomLink
                mobile
                title="About Us"
                href="/about"
                className="mx-4"
              />
              <CustomLink mobile title="Admin" href="/dashboard" className="mx-4" />
              <CustomLink
                mobile
                title="Our Store"
                href="/store"
                className="ml-4"
              />
              <CustomLink
                mobile
                title="Cart"
                href="/cart"
                className="ml-4"
              />
              <CustomLink
                mobile
                title="Sign In"
                href="/auth"
                className="ml-4"
              />
              
            </Hamburger>
          </div>
        </div>
        <nav className="lg:w-[65%] hidden w-full mx-auto lg:flex lg:justify-between justify-around items-center">
          <div className="w-[70%] gap-2 flex justify-around items-center">
            <CustomLink title="Home" href="/" className="mr-4" />
            <CustomLink title="About Us" href="/about" className="mx-4" />
            <CustomLink title="Admin" href="/dashboard" className="mx-4" />
            <CustomLink title="Our Store" href="/store" className="ml-4" />
          </div>
          {/* <div className="w-[30%] relative mr-2">
            <Input
              className="text-[16px] text-[#0084CB]/75"
              type="text"
              placeholder="Find your interest"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button type="submit"  onClick={handleSearch} className="absolute top-1/2 right-2 transform -translate-y-1/2">

            <Search
             
              size={24}
              className=" text-[#0084CB]"
            />
            </button>
          </div> */}
          <form action={handleSearch} className="w-[30%] relative mr-2">
            <Input
              className="text-[16px] p-3 min-w-[100px] text-[#0084CB]/75"
              type="text"
              placeholder="Find your interest"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <ShoppingCartButton />
          <UserMenuButton />
        </nav>
      </div>
   
  );
};

export default Navbar;
