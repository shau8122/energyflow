"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { storage } from "@/firebase/config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import Image from "next/image";
import { Loader2, PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";

interface UploadFormProps {
  initialUrls?: string[];
  isBussines: boolean;
  isUploading: boolean;
}

const UploadForm = ({
  initialUrls,
  isBussines,
  isUploading,
}: UploadFormProps) => {
  const [downloadUrls, setDownloadUrls] = useState<string[]>(initialUrls || []);
  const [isEditing, setIsEditing] = useState(false);
  const [deletedUrl, setDeleteUrl] = useState<string | null>(null);

  const toggleEdit = () => setIsEditing((current) => !current);

  const handleChange = async (event: { target: { files: any } }) => {
    const selectedFiles = event.target.files;

    // Process each selected file
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      // Your logic to handle each file goes here
      const downloadUrl = await uploadPost(file);
      // //  console.log(downloadUrl)
      // const downloadUrl = "string"
      axios
        .patch(`/api/auth/bussiness`, { downloadUrl })
        .then(() => {
          toast.success("user updated succesfully");
          toggleEdit();
        })
        .catch((e) => {
          toast.error("something went wrong");
          console.log(e);
        });
      setDownloadUrls((prevUrls) => [...prevUrls, downloadUrl]);
    }
  };
  const handleDelete = async (deleteUrl: string) => {
    setDeleteUrl(deleteUrl);

    const imageRef = ref(storage, deleteUrl);

    try {
      const res = await deleteObject(imageRef);
      axios
        .patch(`/api/auth/bussiness`, { deleteUrl })
        .then(() => {
          toast.success("user updated succesfully");
          const updatedUrls = downloadUrls.filter((url) => url !== deleteUrl);
          setDownloadUrls(updatedUrls);
        })
        .catch((e) => {
          toast.error("something went wrong");
          console.log(e);
        });
    } catch (error) {
      console.error("Error deleting object:", error);
    }
  };
  const uploadPost = async (selectedFile: File) => {
    const imageRef = ref(storage, `images/${selectedFile.name}`);

    try {
      // Upload the file
      await uploadBytes(imageRef, selectedFile);

      // Get the download URL
      const downloadUrl = await getDownloadURL(imageRef);

      // Do something with the download URL (e.g., save it to a database)
      console.log("File available at", downloadUrl);
      return downloadUrl;
    } catch (error) {
      // Handle errors
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      {isBussines && (
        <>
          <div className="font-medium flex items-center justify-between">
            Attachments
            {isUploading && (
              <Button onClick={toggleEdit} variant="ghost">
                {isEditing && <>Cancel</>}
                {!isEditing && (
                  <>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add a file
                  </>
                )}
              </Button>
            )}
          </div>
          {isEditing && (
            <div>
              <Input
                type="file"
                onChange={handleChange}
                placeholder="Select files"
                size={50 * 1024 * 1024}
                multiple
              />
              <div className="text-xs text-muted-foreground mt-4">
                Add anything use full to show about your business
              </div>
            </div>
          )}

          {!isEditing && (
            <>
              {downloadUrls.length === 0 && (
                <p className="text-sm mt-2 text-slate-500 italic">
                  No attachments yet
                </p>
              )}
              {downloadUrls.length > 0 && (
                <div className="space-y-2 grid gap-2 grid-cols-12">
                  {downloadUrls.map((url, index) => (
                    <div
                      key={index}
                      className="flex  items-center h-[300px] p-3 col-span-12 md:col-span-4  lg:col-span-3 relative  bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
                    >
                      {/* <File className="h-4 w-4 mr-2 flex-shrink-0" /> */}
                      <p className="text-xs ">
                        <Image
                          src={url}
                          fill
                          style={{
                            objectFit: "contain",
                          }}
                          alt={index + ""}
                        />
                      </p>
                      {deletedUrl === url && (
                        <div className="ml-auto top-0 right-0 absolute hover:opacity-75 transition">
                          <Loader2 className="h-8 w-8 animate-spin" />
                        </div>
                      )}
                      {deletedUrl !== url && isUploading && (
                        <button
                          type="button"
                          onClick={() => handleDelete(url)}
                          className="ml-auto top-0 right-0 absolute hover:opacity-75 transition"
                        >
                          <X className="h-8 w-8" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default UploadForm;
