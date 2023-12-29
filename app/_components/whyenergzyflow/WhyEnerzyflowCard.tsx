import Image, { StaticImageData } from "next/image";


interface WhyEnerzyflowCardProps {
  img: StaticImageData;
  title: string;
  description: string;
  left: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

const WhyEnerzyflowCard: React.FC<WhyEnerzyflowCardProps> = ({
  img,
  title,
  description,
  left,
  isFirst,
  isLast,
}) => {
  return (
    <li
      className={` w-full list-none rounded-xl md:rounded-none  md:h-[250px] p-5 md:p-10 bg-gray-50 shadow-md ${
        isLast && "md:rounded-b-3xl"
      } ${isFirst && "md:rounded-t-3xl"} `}
    >
      <div
        className={`w-full h-full flex flex-col  gap-8 items-center ${
          left ? "md:flex-row" : "md:flex-row-reverse"
        } `}
      >
        <div className="w-full h-[300px] md:h-full relative md:w-1/4 flex justify-center items-center">
          <Image src={img} alt="whyenergzyflow" className="w-full" sizes="100" fill />
        </div>
        <div className="w-full h-full md:w-3/4 gap-3 flex flex-col justify-start ">
          <h1 className="text-start font-semibold text-2xl text-mainColor">
            {title}
          </h1>
          <p className=" text-justify flex-1 text-lg text-slate-600 mt-2 font-medium mb-5">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default WhyEnerzyflowCard;
