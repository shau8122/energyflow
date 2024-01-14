import { Download } from "lucide-react";
import { LabelsForm } from "./_components/LabelsForm";
import Link from "next/link";
import TableWrapper from "./_components/table/TableWrapper";
import { auth } from "@/auth";
import db from '@/libs/db'
const LabelsPage = async () => {
  const session =await auth();
  if(!session?.user){
    return;
  }
  const userId = session.user.id;
  const files = await db.label.findMany({
    where:{
      userId
    }
  })
  const sanitizedFiles = files.map(file => ({
    ...file,
    cdrUrl: file.cdrUrl !== null ? file.cdrUrl : undefined,
    imgUrl: file.imgUrl !== null ? file.imgUrl : undefined,
    createdAt: file.createdAt!==null ? new Date(file.createdAt):null
  }));
  return (
    <div className="my-5 md:mx-5">
      <div className="w-full border-2 pb-3 rounded-xl">
        <div className="w-full h-[60px] flex items-center  rounded-t-xl bg-blue-500">
          <div className="text-3xl ml-2 font-semibold h-12 w-12 flex justify-center items-center rounded-full bg-white">
            🏷️
          </div>
          <h1 className="text-xl font-semibold text-white ml-2">
            {" "}
            Your Labels
          </h1>
        </div>
        <Link
          href="/dummy.pdf"
          target="_blank"
          className=" font-bold flex justify-center items-center w-[250px] h-[75px] my-4 mx-2 rounded-xl text-white bg-blue-500 hover:bg-indigo-900"
        >
          <Download className="mr-2" /> Download Label Template
        </Link>
        <LabelsForm />
      <div className="w-full border-t-2 mt-6 pb-3 ">

        <TableWrapper files={sanitizedFiles} />
      </div>
      </div>
    </div>
  );
};

export default LabelsPage;
