"use client";
import AutoplayCarousel from "./AutoplayCarousel";
import AnimatedText from "./AnimatedText";
import VideoBg from "@/components/VideoBg";

const LogoComponent = () => {
  const slides1 = [
    "/bottles/2 (1).jpeg",
    "/bottles/2 (2).jpeg",
    "/bottles/2 (3).jpeg",
    "/bottles/2 (4).jpeg",
    "/bottles/2 (5).jpeg",
  ];
  const slides2 = [
    "/bottles/2 (6).jpeg",
    "/bottles/2 (7).jpeg",
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
        className=" !text-center font-semibold text-mainColor "
      />

      <div className="grid grid-cols-12 justify-between items-center gap-2 w-full">
        <div className="relative hidden md:block h-[50vh] sm:h-[30vh]  md:h-full col-span-12 sm:col-span-6 md:col-span-3">
          <AutoplayCarousel items={slides1} />
        </div>
        {/* <div
          className="h-[50vh] md:h-full col-span-12 md:col-span-6"
          style={{
            backgroundImage: 'url("/asset1.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center' ,
          }}
        >
          <div className="w-full h-full">
            <div className="bg-red-500 absolute top-[11%]  h-[60%] w-[95%]">
              <div className="relative w-full h-full">
              <Image alt="" src="/bottleMain.jpg" fill style={{objectFit:"cover"}} />
              </div>
            </div>
          </div>
        </div> */}
        <div className="md:col-span-6 col-span-12">
          <VideoBg />
        </div>
        <div className="relative md:hidden block h-[40vh] sm:h-[30vh]  md:h-full col-span-12 sm:col-span-6 md:col-span-3">
          <AutoplayCarousel items={slides1} /> 
        </div>
        <div className="relative h-[40vh] sm:h-[30vh]  md:h-full col-span-12 sm:col-span-6 md:col-span-3">
          <AutoplayCarousel items={slides2} />
        </div>
      </div>
      <AnimatedText
        text={`"Connect your brand to consumers Hand"`}
        className=" !text-center font-semibold text-mainColor"
      />
    </div>
  );
};

export default LogoComponent;
