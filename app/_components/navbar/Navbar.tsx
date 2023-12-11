"use client";
import Image from "next/image";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}
const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      <p className="text-lg text-[#50b8e7] font-semibold">{title}</p>
      <span
        className={`
        h-[2px] 
          inline-block bg-[#50b8e7]
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
  }, [])
  const handleClick=()=>{
      sessionStorage.removeItem("user")
      toast.success("Logout successfully!")
      window.location.reload();
  }
  return (
    <div className="w-full">
      <div className="w-3/4 max-w-[1080px] mx-auto h-28 flex lg:flex-row flex-col  ">
        <div className="lg:w-1/4 w-full flex justify-center items-center">
          <Image src="/MainLogo2.png" width={200} height={200} alt={"logo"} />
        </div>
        <nav className="lg:w-2/4 w-full lg:px-10 mx-auto flex lg:justify-between justify-around items-center">
          <CustomLink title="Home" href="/" className="mr-4" />
          <CustomLink title="About" href="/about" className="mx-4" />
          <CustomLink title="Admin" href="/admin" className="mx-4" />
          <CustomLink title="Explore" href="/explore" className="ml-4" />
        </nav>

        <div className="flex w-full gap-2 justify-around mt-2 md:justify-center items-center">
          <Input
            className="text-[16px] text-[#50b8e7]/75"
            type="text"
            placeholder="Find your interest"
          />
          <Button
            className="rounded-xl bg-[#50b8e7] text-white text-[16px]"
            variant="outline"
          >
            Search
          </Button>
          {
            user ? <Button
            className="rounded-xl bg-[#50b8e7] text-white text-[16px]"
            variant="outline"
            onClick={handleClick}
          >
            Sign Out
          </Button> : <Button
            className="rounded-xl bg-[#50b8e7] text-white text-[16px]"
            variant="outline"
          >
            <Link href="/auth
            ">Sign In</Link>
          </Button>
          }
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
