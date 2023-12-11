import Image from "next/image";
import AutoplayCarousel from "./AutoplayCarousel";

const LogoComponent = () => {
  const slides = ["/bottle1.jpg", "/bottle2.jpg", "/bottle3.jpg"];
  return (
    <div className=" md:h-auto mt-40 lg:mt-0 w-full max-w-screen-2xl mx-auto">
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
    </div>
  );
};

export default LogoComponent;
