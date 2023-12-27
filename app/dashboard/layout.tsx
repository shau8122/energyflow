
// import { getApiLimitCount } from "@/lib/api-limit";

import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";




const DashboardLayout=async({
  children
}:{
  children: React.ReactNode;
})=>{
  // const apiLimitCount = await getApiLimitCount()
  const apiLimitCount = 5
  return(
     <div className="h-full relative ">
    <div className="hidden h-full lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0  bg-gray-900 ">
      <Sidebar/>
    </div>
    <main className="relative lg:ml-80">
      <Navbar />
      {children}
    </main>
  </div>
  )
}
export default DashboardLayout;