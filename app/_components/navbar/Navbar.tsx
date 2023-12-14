"use client";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Hamburger from "@/components/Hamburger";
import { Input } from "@/components/ui/input";
import { SearchCheckIcon, Search } from "lucide-react";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  mobile?:boolean
}
const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className,mobile }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      <p className={`${mobile?"text-3xl":"text-lg"} text-[#0084CB] font-semibold`}>{title}</p>
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
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    setUser(sessionStorage.getItem("user"));
  }, []);
  const handleClick = () => {
    sessionStorage.removeItem("user");
    toast.success("Logout successfully!");
    window.location.reload();
  };
  return (
    <div className="w-full sticky pt-2
    bg-white
    shadow-md
    top-0 z-50">
       {/* //  bg-[#b9e2f5]/95   */}
      <div className="w-full mx-auto max-w-screen-2xl  flex lg:flex-row flex-col ">
        <div className="lg:w-[35%]  w-full mx-auto  flex justify-center items-center">
          <Image
            src="/MainLogo3.png"
            className=""
            width={200}
            height={200}
            alt={"logo"}
          />
          <div className="w-1 rounded-xl h-3/4 ml-[2px] mr-1 bg-[#0084CB]/50" />
          <h1 className="text-sm xl:text-lg font-semibold text-[#0084CB]">
            Sail your Business Ship,
            <br />
            With our enerZy Sip
          </h1>
        </div>
        <div className="lg:hidden w-full gap-3 items-center my-4 flex">
          
          <div className="flex-1 mx-4 relative">
            <Input
              className="text-[16px] text-[#0084CB]/75"
              type="text"
              placeholder="Find your interest"
            />
            <Search
              onClick={() => console.log("clicked")}
              size={24}
              className="absolute text-[#0084CB] cursor-pointer top-1/2 right-2 transform -translate-y-1/2"
            />
          </div>
          <div className="mr-4 ">

          <Hamburger>
            <CustomLink mobile title="Home" href="/" className="mr-4" />
            <CustomLink mobile title="About Us" href="/about" className="mx-4" />
            <CustomLink mobile title="Admin" href="/admin" className="mx-4" />
            <CustomLink mobile title="Our Store" href="/store" className="ml-4" />
            
            {user ? (
              <Button
                className="rounded-xl bg-[#0084CB] text-white text-xl"
                variant="outline"
                onClick={handleClick}
              >
                Sign Out
              </Button>
            ) : (
              <CustomLink mobile title="Sign In" href="/auth" className="ml-4" />
            )}
          </Hamburger>
          </div>
        </div>
        <nav className="lg:w-[65%] hidden w-full mx-auto lg:flex lg:justify-between justify-around items-center">
          <div className="w-[70%] gap-2 flex justify-around items-center">
            <CustomLink title="Home" href="/" className="mr-4" />
            <CustomLink title="About Us" href="/about" className="mx-4" />
            <CustomLink title="Admin" href="/dashboard" className="mx-4" />
            <CustomLink title="Our Store" href="/store" className="ml-4" />
            
            {user ? (
            <Button
              className="rounded-xl bg-[#0084CB] text-white text-[16px]"
              variant="outline"
              onClick={handleClick}
            >
              Sign Out
            </Button>
          ) : (
            <CustomLink title="Sign In" href="/auth" className="ml-4" />
          )}
          </div>
          <div className="w-[30%] relative mr-2">
            <Input
              className="text-[16px] text-[#0084CB]/75"
              type="text"
              placeholder="Find your interest"
            />
            <Search
              onClick={() => console.log("clicked")}
              size={24}
              className="absolute text-[#0084CB] cursor-pointer top-1/2 right-2 transform -translate-y-1/2"
            />
          </div>
         
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
