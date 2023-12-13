
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
    <div className="hidden h-full md:flex md:w-80 md:flex-col md:fixed md:inset-y-0  bg-gray-900 ">
      <Sidebar apiLimitCount={apiLimitCount}/>
    </div>
    <main className=" md:ml-80">
      <Navbar apiLimitCount={apiLimitCount}/>
      {children}
    </main>
  </div>
  )
}
export default DashboardLayout;