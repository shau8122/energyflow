"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MainLogo from "public/MainLogo3.png";

import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  BarChart3,
  PieChart,
  BellDot,
  Languages,
  LogOut,
  HelpCircle,
  
} from "lucide-react";
import { cn } from "@/libs/utils";
import { Button } from "@/components/ui/button";
import { logout } from "@/action/logout";
import toast from "react-hot-toast";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Statistics",
    icon: BarChart3,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Reports",
    icon: PieChart,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Notifications",
    icon: BellDot,
    href: "/video",
    color: "text-orange-700",
  },

  {
    label: "Language",
    icon: Languages,
    href: "/music",
    color: "text-emerald-500",
  },

  
  {
    label: "Help",
    icon: HelpCircle,
    href: "/code",
    color: "text-green-700",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const handleLogout=()=>{
    logout()
    .then(()=>{
      toast.success("Logged out successfully")
    })
  }
  return (
    <div
      id="sidebar"
      className="space-y-4 py-4 flex flex-col h-full overflow-auto bg-slate-200 shadow-md text-mainColor"
    >
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex mx-12 items-center p-2 mb-10">
          <Image priority alt="logo" src={MainLogo} />
        </Link>
        <div className="space-y-2">
          {routes.map((route) => (
            <Button
            onClick={()=>{
              window.location.href=route.href
            }}
              key={route.href}
              className={cn(
                "text-lg group flex p-6 w-full justify-start font-medium cursor-pointer hover:text-mainColor hover:bg-gray-300 rounded-xl transition",
                route.href === pathname
                  ? "text-mainColor bg-gray-300"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-8 w-8 mr-3", route.color)} />
                {route.label}
              </div>
            </Button>
          ))}
          <Button
          onClick={handleLogout}
              
              className={cn(
                "text-lg group flex p-6 w-full justify-start font-medium cursor-pointer hover:text-mainColor hover:bg-gray-300 rounded-xl transition text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <LogOut className={cn("h-8 w-8 mr-3 text-green-700")} />
                Log Out
              </div>
          </Button>
        </div>
      </div>
      
    </div>
  );
};
export default Sidebar;
