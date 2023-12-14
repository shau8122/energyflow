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
    <div
      className=" md:h-auto lg:mt-0 w-full max-w-screen-2xl mx-auto
    bg-white
    "
      //  bg-[#b9e2f5]/75
    >
      <AnimatedText
        text="we create emotion for your  promotion,"
        className=" !text-center font-semibold text-[#0084CB]"
      />

      <div className="grid grid-cols-12 justify-between items-center gap-2 w-full h-auto md:h-full">
        <div
          className="relative h-[50vh] md:h-full col-span-12 md:col-span-6"
          style={{
            backgroundImage: 'url("/asset1.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center' ,
          }}
        >
          <div className="w-full h-full relative border-2 flex justify-center items-center  border-lime-900 z-10 ">
            <div className="bg-red-500 absolute top-[11%]  h-[60%] w-[95%]">
              <div className="relative w-full h-full">
              <Image alt="" src="/bottleMain.jpg" fill style={{objectFit:"cover"}} />
              </div>
            </div>
          </div> 
        </div>

        <div className="relative col-span-6 md:col-span-3">
          <div className="w-full p-4 border-[5px] border-gray-700 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-xl ">
            <div className="w-full border-[5px] rounded-xl border-gray-700">

          <AutoplayCarousel items={slides1} />
            </div>
            
          </div>
        </div>

        <div className="relative col-span-6 md:col-span-3">
          <div className="w-full mx-auto p-4 border-[5px] border-gray-700 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-xl ">
            <div className="w-full border-[5px] rounded-xl border-gray-700">

          <AutoplayCarousel items={slides2} />
            </div>
            
          </div>
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
