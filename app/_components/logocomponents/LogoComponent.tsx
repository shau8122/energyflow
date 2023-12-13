import Image from "next/image";
import AutoplayCarousel from "./AutoplayCarousel";
import AnimatedText from "./AnimatedText";

const LogoComponent = () => {
  const slides1 = [
    "/bottles/1.jpeg",
    "/bottles/2 (1).jpeg",
    "/bottles/2 (2).jpeg",
    "/bottles/2 (3).jpeg",
    "/bottles/2 (4).jpeg",
  ];
  const slides2 = [
    
    "/bottles/2 (5).jpeg",
    "/bottles/2 (6).jpeg",
    "/bottles/2 (8).jpeg",
    "/bottles/2 (9).jpeg",
    "/bottles/2 (10).jpeg",
  ];
  return (
    <div className=" md:h-auto lg:mt-0 w-full max-w-screen-2xl mx-auto
    bg-white
    "
    //  bg-[#b9e2f5]/75
     >
        
          <AnimatedText
            text="we create emotion for your  promotion,"
            className=" !text-center font-semibold text-[#0084CB]"
          />
         
      
      <div className="grid grid-cols-12 justify-between items-center gap-2 w-full h-auto md:h-full">
        <div className="relative h-[50vh] md:h-full col-span-12 md:col-span-6">
          <Image
            src="/bottleMain.jpg"
            fill
            alt={"bottle1"}
          />
        </div>
        <div className="relative col-span-6 md:col-span-3">
          <AutoplayCarousel items={slides1} />
        </div>
        <div className="relative col-span-6 md:col-span-3">
          <AutoplayCarousel items={slides2} />
        </div>
      </div>

      <AnimatedText
            text={`"Connect your brand to consumers Hand"`}
            className=" !text-center font-semibold text-[#0084CB]"
          />
    </div>
  );
};

export default LogoComponent;
