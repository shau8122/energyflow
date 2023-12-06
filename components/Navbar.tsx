"use client";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  return (
    <div className="w-full">
      <div className="w-3/4 max-w-[1080px] mx-auto h-28 flex md:flex-row flex-col  ">
        <div className="md:w-1/4 w-full flex justify-center items-center">
          <Image src="/MainLogo2.png" width={200} height={200} alt={"logo"} />
        </div>
        <nav className="md:w-2/4 w-full px-10 flex justify-between items-center">
          <CustomLink title="Home" href="/" className="mr-4" />
          <CustomLink title="About" href="/about" className="mx-4" />
          <CustomLink title="Admin" href="/admin" className="mx-4" />
          <CustomLink title="Explore" href="/explore" className="ml-4" />
        </nav>

        <div className="flex gap-2 justify-center items-center">
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
          <Button
            className="rounded-xl bg-[#50b8e7] text-white text-[16px]"
            variant="outline"
          >
            <Link href="/auth/sign-up
            ">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
