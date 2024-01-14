// "use client";
// import { cn } from "@/libs/utils";
// import { db, storage } from "@/firebase";


// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { Cross, CrossIcon } from "lucide-react";
// import { useState } from "react";
// import Dropzone from "react-dropzone";

// const DropzoneComponent = () => {
//   const [loading, setLoading] = useState(false);
//   const [files, setFiles] = useState<File[]>([]);
//   const { isLoaded, isSignedIn, user } = useUser();
//   const onDrop = (acceptedFiles: File[]) => {
//     acceptedFiles.forEach((file) => {
//       const reader = new FileReader();
//       reader.onabort = () => console.log("file reading was aborted");
//       reader.onerror = () => console.log("file reading has failed");
//       reader.onload = async () => {
//         await uploadPost(file);
//       };

//       reader.readAsArrayBuffer(file);
//     });
//   };
//   const uploadPost = async (selectedFile: File) => {
//     if (loading) return;
//     if (!user) return;
//     setLoading(true);

//     // do something with the files

//     //addDoc->users/user12345/files

//     const docRef = await addDoc(collection(db, "users", user.id, "files"), {
//       userId: user.id,
//       filename: selectedFile.name,
//       fullName: user.fullName,
//       profileImg: user.imageUrl,
//       timestamp: serverTimestamp(),
//       type: selectedFile.type,
//       size: selectedFile.size,
//     });
//     const imageRef = ref(storage, `users/${user.id}/${docRef.id}`);

//     await uploadBytes(imageRef, selectedFile).then(async (snaodhot) => {
//       const downloadUrl = await getDownloadURL(imageRef);

//       updateDoc(doc(db, "users", user.id, "files", docRef.id), {
//         downloadUrl: downloadUrl,
//       });
//     });

//     setLoading(false);
//   };
//   // max file size = 20mb
//   const maxSize = 20971520;
//   return (
//     <Dropzone
//       minSize={0}
//       maxSize={maxSize}
//       // onDrop={(acceptedFiles) => onDrop(acceptedFiles)}
//       onDrop={()=>console.log("hello")}
//     >
//       {({
//         getRootProps,
//         getInputProps,
//         isDragActive,
//         isDragReject,
//         fileRejections,
//       }) => {
//         const isFileTooLarge =
//           fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
//         return (
//           <section className="m-4">
//             <div
//               {...getRootProps()}
//               className={cn(
//                 "w-[300px] h-[35vh] flex flex-col gap-2 justify-center items-center p-5 border border-dashed rounded-xl text-center",
//                 isDragActive
//                   ? "bg-[#035FFE] text-white animate-pulse"
//                   : "bg-blue-100/50 dark:bg-slate-800/80 text-gray-900"
//               )}
//             >
//               <input {...getInputProps()} />
//               <Cross className="h-8 w-8 text-gray-900" />
//               {!isDragActive && "Click here or drop a file to upload!"}
//               {isDragActive && !isDragReject && "Drop to upload this file!"}
//               {isDragReject && "File type not accepted, sorry!"}
//               {isFileTooLarge && (
//                 <div className="text-red-600 mt-2">File is too large.</div>
//               )}
//             </div>
//           </section>
//         );
//       }}
//     </Dropzone>
//   );
// };
// export default DropzoneComponent;
