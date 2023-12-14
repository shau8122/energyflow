import Image from "next/image";
import WhyEnerzyflow1 from "@/public/whyenerzyflow/WhyEnerzyflow (1).jpeg";
import WhyEnerzyflow5 from "@/public/whyenerzyflow/WhyEnerzyflow (2).jpeg";
import WhyEnerzyflow3 from "@/public/whyenerzyflow/WhyEnerzyflow (3).jpeg";
import WhyEnerzyflow4 from "@/public/whyenerzyflow/WhyEnerzyflow (4).jpeg";
import WhyEnerzyflow2 from "@/public/whyenerzyflow/WhyEnerzyflow (5).jpeg";
import WhyEnerzyflowCard from "./WhyEnerzyflowCard";

const WhyEnerzyflowDetails = [
  {
    img: WhyEnerzyflow1,
    title: "Connect with us",
    description: "We are the only company in India to provide 100% customizable bottles. We understand that your brand is unique, and we are here to ensure that uniqueness is reflected in every drop.",
    left: true,
  },
  {
    img: WhyEnerzyflow2,
    title:"Capture your potential market",
    description:" We help you capture your potential market by providing you with the best quality bottles that are sure to make your brand stand out from the rest.",
    left: false,
  },
  {
    img: WhyEnerzyflow3,
    title:"Let us shine with us",
    description:"Shine with us as we help you create a brand that is sure to make a mark in the industry. We are here to help you create a brand that is sure to make a mark in the industry.",
    left: true,
  },
  {
    img: WhyEnerzyflow4,
    title:"Be the market leader",
    description:"Be the market leader with our premium quality bottles that are sure to make your brand stand out from the rest.",
    left: false,
  },
  {
    img: WhyEnerzyflow5,
    title:"See your exponential growth",
    description:"Growth is the only thing that matters. We are here to help you grow your business and see exponential growth in your business.",
    left: true,
  }
];

const WhyEnerzyflow = () => {
  return (
    <div className="max-w-[1080px] px-4 lg:px-0 lg:mx-auto w-full flex flex-col justify-center   items-center">
      <h1 className="text-center  text-5xl my-6 text-[#0084CB]">
        Why <span className="font-bold">Enerzyflow</span>
      </h1>
      <ul className="w-full  flex-col flex mt-3 gap-8 md:gap-16">
      {
        WhyEnerzyflowDetails.map((detail, index) => (
          <div key={index}>
            
            <WhyEnerzyflowCard isFirst={index===0}  isLast={index===WhyEnerzyflowDetails.length-1} {...detail} />
          </div>
        ))
      }
      </ul>
    </div>
  );
};

export default WhyEnerzyflow;
