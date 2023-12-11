"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/LiIcons";
interface DetailsProps {
  title: string;
  description: string;
}

const Details: React.FC<DetailsProps> = ({
  title,
  description,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon referance={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-[#50b8e7] text-2xl">
          {title}&nbsp;
        </h3>
        <span className=" font-medium text-lg text-dark/75 mt-4">
          {description}
        </span>
      </motion.div>
    </li>
  );
};
const ExperianceDetails = [
  {
    title:"Who We Are:",
    description:"Enerzyflow is not just a company; we are a team of passionate professionals dedicated to transforming ordinary bottles into captivating brand ambassadors. With a focus on innovation, creativity, and sustainability, we bring a fresh perspective to the world of branded merchandise.",
  },
  {
    title:"What Sets Us Apart:",
    description:"Our commitment to excellence is reflected in the quality of our mineral water and the precision of our branding. We go beyond the conventional by seamlessly blending functionality with aesthetics. Each bottle is a canvas for your brand story, meticulously designed to make a lasting impression.",
  },
  {
    title:"Premium Quality, Always:",
    description:"Enerzyflow stands for uncompromising quality. Our mineral water is sourced from pristine natural springs, ensuring purity and refreshment in every sip. The bottles themselves are crafted with precision, utilizing eco-friendly materials that align with our commitment to sustainability.",
  },
  {
    title:"Why Choose Enerzyflow:",
    description:"Tailored Branding Solutions: We understand that every brand is unique. Our team works closely with you to create bespoke branding solutions that align with your identity and message.",
  },
  {
    title:"Sustainability Matters:",
    description:"Enerzyflow is committed to environmental responsibility. Our bottles are not just vessels for your brand but also a statement of your commitment to a greener planet.",
  },
  {
    title:"Exceptional Customer Service:",
    description:"Your satisfaction is our priority. Our dedicated team is always ready to assist you at every step, ensuring a seamless and enjoyable experience with Enerzyflow.",
  },
  {
    title:"Join Us on the Journey:",
    description:"Enerzyflow invites you to embark on a journey of brand elevation. Let us redefine the way your business is perceived with our premium quality mineral water bottles. Trust us to turn your brand into a refreshing experience!",
  }
];
const AboutComponents = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-10">
      <div ref={ref} className=" w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-gray-900 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {ExperianceDetails.map((item, index) => {
            return <Details key={index} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutComponents;
