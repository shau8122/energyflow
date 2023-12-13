import DropzoneComponent from "@/components/Dropzone";
import { Key, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import image1 from "../../public/bottles/1.jpeg";

const Home = () => {
  const slides = [
    "/bottles/1.jpeg",
    "/bottles/2 (1).jpeg",
    "/bottles/2 (2).jpeg",
    "/bottles/2 (3).jpeg",
    "/bottles/2 (4).jpeg",
  ];
  return (
    <div className="grid grid-cols-12 gap-8  m-3">
      <div className="col-span-4 flex flex-col  justify-end relative  h-[40vh]">
        <div className="h-16 w-16 top-0 left-[50%] shadow-md -translate-x-[50%] bg-white absolute rounded-xl flex justify-center items-center">
          <ThumbsUpIcon className="h-8 w-8 text-black " />
        </div>
        <div className="flex flex-col shadow-md gap-5 justify-center rounded-xl bg-[#84cdee] items-center h-[90%] ">
          <div className="text-2xl font-bold">Total Users</div>
          <div className="text-4xl font-bold">30,000</div>
        </div>
      </div>
      <div className="col-span-4 bg-red-700 rounded-xl h-[40vh]">2</div>
      <div className="col-span-4 bg-red-700 rounded-xl h-[40vh]">3</div>
      <div className=" col-span-12 flex  bg-red-700 rounded-xl h-[40vh]">
        <div className="w-auto h-full">
          <DropzoneComponent />
        </div>
        <div id="image-scroll-upload" className="flex gap-3 w-full  overflow-x-auto  h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative aspect-square my-2">
              <Image
                alt="Upload"
                fill
                className="object-cover rounded-xl"
                src={slide}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
