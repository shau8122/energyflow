// import { getApiLimitCount } from "@/lib/api-limit";

import { Button } from "@/components/ui/button";
import Footer from "../_components/footer/Footer";
import Navbar from "../_components/navbar/Navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="w-full">
        <div className="w-full fixed pt-2 bg-white shadow-lg top-0 z-50">
          <Navbar />
        </div>
       
   
      <div className="sm:pt-[105px] overflow-hidden pt-16 h-full w-screen min-h-screen">
        {children}
        <Footer />
      Bu</div>
    </div>
  );
};
export default DashboardLayout;
