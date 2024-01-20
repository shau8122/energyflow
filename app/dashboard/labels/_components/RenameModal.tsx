"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios" ;
import { useRef } from "react";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/navigation";

interface RenameModalProps {
  isRenameModalOpen: boolean;
  fileId: string;
  filename: string;
  setIsRenameModalOpen: (open:boolean) => void;
}

export const RenameModal = ({
  isRenameModalOpen,
  fileId,
  filename,
  setIsRenameModalOpen,
}: RenameModalProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // Create a ref for the filename input
  const filenameInputRef = useRef<HTMLInputElement | null>(null);

  const handleRename = () => {
    setLoading(true);

    // Access the current value of the input using the ref
    const newFilename = filenameInputRef.current?.value;
    console.log(newFilename)
    axios
      .patch("/api/auth/label", {
        filename: newFilename,
        fileId,
      })
      .then(() => {
        toast.success("Label Updated");
        router.refresh()
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
        setIsRenameModalOpen(false)
      });
  };

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => setIsRenameModalOpen(isOpen)}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Label name</DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="filename" className="text-right">
            Label Name
          </Label>
          <Input
            defaultValue={filename}
            id="filename"
            ref={filenameInputRef} // Assign the ref to the input element
            className="col-span-3 rounded-xl"
          />
        </div>
        <DialogFooter>
          <Button
            className="bg-blue-500 text-white hover:bg-black rounded-xl"
            onClick={handleRename}
            type="submit"
          >
            {loading?<Spinner/>:"Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
