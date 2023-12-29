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
// import FreeCounter from "./FreeCounter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
    label: "Logout",
    icon: LogOut,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Help",
    icon: HelpCircle,
    href: "/code",
    color: "text-green-700",
  },
];
// interface SidebarProps {
//   apiLimitCount: number;
// }
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div
      id="sidebar"
      className="space-y-4 py-4 flex flex-col h-full overflow-auto bg-gray-50 text-mainColor"
    >
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex mx-12 items-center p-2 mb-10">
          <Image alt="logo" src={MainLogo} />
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
        </div>
      </div>
      {/* <FreeCounter
        apiLimitCount={apiLimitCount}
      /> */}
    </div>
  );
};
export default Sidebar;
