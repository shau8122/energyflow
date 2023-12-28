import { Download } from "lucide-react";
import { LabelsForm } from "./_components/LabelsForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const LabelsPage = () => {
  return ( 
    <div className="my-5 md:mx-5">
      <div className="w-full border-2 pb-3 rounded-xl">
        <div className="w-full h-[60px] flex items-center  rounded-t-xl bg-blue-500">
          <div className="text-3xl ml-2 font-semibold h-12 w-12 flex justify-center items-center rounded-full bg-white">🏷️</div>
          <h1 className="text-xl font-semibold text-white ml-2"> Your Labels</h1>
        </div>
        <Link href="/dummy.pdf" target="_blank" className=" font-bold flex justify-center items-center w-[250px] h-[75px] my-4 mx-2 rounded-xl text-white bg-blue-500 hover:bg-indigo-900">
         <Download className="mr-2"/> Download Label Template
        </Link>
          <LabelsForm/>
      </div>
    </div>
   );
}
 
export default LabelsPage;