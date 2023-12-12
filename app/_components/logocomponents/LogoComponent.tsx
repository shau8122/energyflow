import Image from "next/image";
import AutoplayCarousel from "./AutoplayCarousel";
import AnimatedText from "./AnimatedText";

const LogoComponent = () => {
  const slides = ["/bottle1.jpg", "/bottle2.jpg", "/bottle3.jpg"];
  return (
    <div className=" md:h-auto mt-64 lg:mt-0 w-full max-w-screen-2xl mx-auto bg-[#b9e2f5]/75">
        <div className="max-w-[1080px] w-full mx-auto ">
          <AnimatedText
            text="we create emotion for your  promotion"
            className="mt-10 text-2xl  sm:text-3xl md:text-4xl lg:text-5xl  !text-center font-semibold text-[#0084CB]"
          />
          <AnimatedText
            text="Connect your brand to consumers Hand"
            className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl  !text-center font-semibold text-[#0084CB]"
          />
        </div>
      <div className="grid grid-cols-12 justify-between items-center gap-2 w-full h-auto md:h-full">
        <div className="relative col-span-12 md:col-span-6">
          <Image
            src="/bottleMain.jpg"
            width={1000}
            height={500}
            alt={"bottle1"}
          />
        </div>
        <div className="relative col-span-6 md:col-span-3">
          <AutoplayCarousel items={slides} />
        </div>
        <div className="relative col-span-6 md:col-span-3">
          <AutoplayCarousel items={slides} />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default LogoComponent;
