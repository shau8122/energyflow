"use client";
import { Bussiness } from "@prisma/client";
import { BussinessProfileForm } from "./BussinessProfileForm";
import UploadForm from "./UploadForm";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";
interface BussinessProps {
  bussinessDetails: Bussiness | null;
}
const Bussiness: React.FC<BussinessProps> = ({ bussinessDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);
  return (
    <div className="w-full border-2 pb-3 mt-3 rounded-xl">
      <div className="w-full h-[60px] flex items-center justify-between rounded-t-xl bg-lime-500">
        <div className="flex items-center h-full">
          <div className="text-3xl ml-2 font-semibold h-12 w-12 flex justify-center items-center rounded-full bg-white">
            👤
          </div>
          <h1 className="text-xl font-semibold text-white ml-2">
            {" "}
            Your Business
          </h1>
        </div>
        {
bussinessDetails &&
        <Link href={`/product/${bussinessDetails.id}`}>
        <Button variant={"outline"} className="text-xl rounded-xl font-semibold text-white ml-2">
           
          Go to your bussiness
          </Button>
        </Link>
        }
        <Button className="text-white" onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Done</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>
      
      <BussinessProfileForm isEditing={isEditing} bussinessDetails={bussinessDetails} />
      <UploadForm
        isBussines={!!bussinessDetails}
        initialUrls={bussinessDetails?.imgUrls}
        isUploading={isEditing}
      />
    </div>
  );
};

export default Bussiness;
