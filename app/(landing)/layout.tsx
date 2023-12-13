
// import { getApiLimitCount } from "@/lib/api-limit";

import Footer from "../_components/footer/Footer";
import Navbar from "../_components/navbar/Navbar";




const DashboardLayout=async({
  children
}:{
  children: React.ReactNode;
})=>{
  // const apiLimitCount = await getApiLimitCount()
  const apiLimitCount = 5
  return(
    <div
        className={`  h-screen   flex flex-col relative min-h-screen bg-cover bg-center`}
        // style={{ backgroundImage: 'url("/bg1.jpeg")' }}
      >
       
         <div className="top-0 left-0 w-full h-full relative bg-transparent z-10 overflow-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
  )
}
export default DashboardLayout;