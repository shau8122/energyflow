import Image from "next/image";
import Section from "./Section";


const LogoComponent = () => {
  const slides=["../public/bottle1.jpg","../public/bottle2.jpg","../public/bottle3.jpg"]
  return ( 
    <div className="h-[70vh] w-full">
      <div className="flex justify-between items-center gap-2 w-full h-full">
        <div className="w-2/4 h-full  relative">
          <Image src="/bottle2.jpg" className=" object-cover" fill alt={"bottle1"} />
        </div>
        <div className="w-1/4    relative">
          <Section autoSlide={true} slides={slides}/>
        </div>
        <div className="w-1/4  relative">
        <Section autoSlide={true} slides={slides}/>
        </div>
      </div>
    </div>
   );
}
 
export default LogoComponent;