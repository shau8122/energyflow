// import { getApiLimitCount } from "@/lib/api-limit";

import Footer from "../_components/footer/Footer";
import Navbar from "../_components/navbar/Navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  // const apiLimitCount = await getApiLimitCount()

  return (
    <div className="h-full min-h-screen flex flex-col relative">
      <Navbar/>
      <div className="flex-1">
      {children}
      </div>
      <Footer />
    </div>
  );
};
export default DashboardLayout;
