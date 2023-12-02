import Image from "next/image";
import Section from "./Section";
import AutoplayCarousel from "./AutoplayCarousel";



const LogoComponent = () => {
  const slides=["/bottle1.jpg","/bottle2.jpg","/bottle3.jpg"]
  return ( 
    <div className="h-[71.5vh] w-full">
      <div className="flex justify-between items-center gap-2 w-full h-full">
        <div className="w-2/4 h-full  relative">
          <Image src="/bottle2.jpg" className=" object-cover" fill  alt={"bottle1"} />
        </div>
        <div className="w-1/4 h-full   relative">
        <AutoplayCarousel items={slides}/>
        </div>
        <div className="w-1/4  h-full relative">
          <AutoplayCarousel items={slides}/>
        </div>
      </div>
    </div>
   );
}
 
export default LogoComponent;