import quoteUp from "@/public/quote-up.svg";
import quoteDown from "@/public/quote-down.svg";
import Image from "next/image";
import React from "react";

interface TestimonialsCardProps {
  name: string;
  place: string;
  description: string;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  name,
  place,
  description,
}) => {
  return (
    <div className="w-full h-full bg-[#dcf0fa]  flex flex-col p-6">
      <div className="md:w-10 md:h-10 w-5 h-5 relative">
        <Image
          src={quoteUp}
          alt="quote-up"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="p-6">
        <p className="text-lg text-slate-700">{description}</p>
        <h4 className="text-xl font-semibold mt-4">{`${name}(${place})`}</h4>
      </div>
      <div className="w-full flex justify-end ">
        <div className="md:w-10 md:h-10 w-5 h-5  relative">
          <Image
            src={quoteDown}
            alt="quote-down"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
