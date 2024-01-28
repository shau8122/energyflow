"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios" ;
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/navigation";

interface DeleteModalProps {
  isDeleteModalOpen: boolean;
  fileId: string;
  setIsDeleteModalOpen: (open:boolean) => void;
}

export const DeleteModal = ({
  isDeleteModalOpen,
  fileId,
  setIsDeleteModalOpen,
}: DeleteModalProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  // Create a ref for the filename input

  const handleDelete = () => {
    setLoading(true);

    // Access the current value of the input using the ref
    
    axios
      .delete(`/api/auth/order?id=${fileId}`)
      .then(() => {
        toast.success("Label Deleted");
        router.refresh();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
        setIsDeleteModalOpen(false)
      });
  };

  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen) => setIsDeleteModalOpen(isOpen)}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Order </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete order?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="bg-red-500 text-white hover:bg-red-400 rounded-xl"
            onClick={handleDelete}
            type="submit"
          >
            {loading?<Spinner/>:"Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
