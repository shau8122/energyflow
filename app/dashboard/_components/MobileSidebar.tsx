"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";


const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
   setIsMounted(true);
  }, [])
  if(!isMounted){
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
