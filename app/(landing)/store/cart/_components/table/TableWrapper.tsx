"use client";

import { columns } from "./Columns";
import { DataTable } from "./Table";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
export type FileType={
  name:string,
  quantity:Number,
  price:Number
}
interface TableWrapperProps{
  files:FileType[]
}

export const TableWrapper:React.FC<TableWrapperProps>=(
  {
    files
  }
)=> {
  
  // if (files.length === 0) return(
  //   <div className="flex flex-col">
  //     <Button variant={"outline"} className="ml-auto w-36 h-10 mb-5">
  //       <Skeleton className="h-5 w-full" />
  //     </Button>
  //     <div className="border rounded-lg ">
  //       <div className="h-12">
  //         {
  //           files.map((file) => (
  //             <div key={file.id} className="flex items-center space-x-4 p-5 w-full">
  //               <Skeleton className="h-12 w-12" />
  //               <Skeleton className="h-12 w-full" />
  //             </div>
  //           ))
  //         }
  //         {
  //           files.length === 0 && (
  //             <div className="flex items-center space-x-4 p-5 w-full">
  //               <Skeleton className="h-12 w-12" />
  //               <Skeleton className="h-12 w-full" />
  //             </div>
  //           )
  //         }
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div className="flex flex-col space-y-5 pb-10">
      <DataTable columns={columns} data={files} />
    </div>
  );
}

export default TableWrapper;
