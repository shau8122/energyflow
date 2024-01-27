
'use client'
import { Button } from "@/components/ui/button";
import MobileSidebar from "./MobileSidebar";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const details = [
  {
    icon: "👤",
    endpoint: "/dashboard/profile",
    description: "User Profile",
  },
  {
    icon: "🛒",
    endpoint: "/dashboard/place",
    description: "Place Order",
  },
  {
    icon: "🏷️",
    endpoint: "/dashboard/labels",
    description: "Your Labels",
  },
  {
    icon: "📚",
    endpoint: "/dashboard/history",
    description: "Order History",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
 
  return (
    <div className="flex sticky z-50 top-0 items-center p-4  bg-slate-200 shadow-md ">
      <MobileSidebar />
      <div className="flex w-full items-center justify-between">
        <Button
          onClick={() => {
            router.back();
          }}
          className=" hidden sm:block text-slate-900 font-semibold"
        >
          <Home size={24} className="mr-2 inline-block"  />
          Back
        </Button>
        <div className="flex gap-5 items-center ">

        {details.map((detail) => (
          <Link
            key={detail.icon}
            href={detail.endpoint}
            className={`flex flex-col items-center justify-center text-sm  ${detail.endpoint===pathname ? "text-blue-500 " : "text-slate-900"}}`}
          >
            <div className="w-10 h-10 text-2xl  rounded-full">{detail.icon}</div>
            <p className="text-sm font-semibold">{detail.description}</p>
          </Link>
        ))}
        
        </div>
      </div>
    </div>
  );
};
export default Navbar;
