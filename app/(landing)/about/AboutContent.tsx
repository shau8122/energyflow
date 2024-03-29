"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/LiIcons";
import Image from "next/image";
interface DetailsProps {
  title: string;
  description: string;
}

const Details: React.FC<DetailsProps> = ({ title, description }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-4 first:mt-0 last:mb-0  w-[70%]  md:ml-32 mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon referance={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="font-bold text-mainColor text-xl">
          {title}&nbsp;
        </h3>
        <p className="  text-justify text-sm sm:text-lg text-slate-800 mt-4">
          {description}
        </p>
      </motion.div>
    </li>
  );
};
const AboutDetails = [
  {
    title: "Who We Are:",
    description:
      "Enerzyflow is not just a company; we are a team of passionate professionals dedicated to transforming ordinary bottles into captivating brand ambassadors. With a focus on innovation, creativity, and sustainability, we bring a fresh perspective to the world of branded merchandise.",
  },
  {
    title: "What Sets Us Apart:",
    description:
      "Our commitment to excellence is reflected in the quality of our mineral water and the precision of our branding. We go beyond the conventional by seamlessly blending functionality with aesthetics. Each bottle is a canvas for your brand story, meticulously designed to make a lasting impression.",
  },
  {
    title: "Premium Quality, Always:",
    description:
      "Enerzyflow stands for uncompromising quality. Our mineral water is sourced from pristine natural springs, ensuring purity and refreshment in every sip. The bottles themselves are crafted with precision, utilizing eco-friendly materials that align with our commitment to sustainability.",
  },
  {
    title: "Why Choose Enerzyflow:",
    description:
      "Tailored Branding Solutions: We understand that every brand is unique. Our team works closely with you to create bespoke branding solutions that align with your identity and message.",
  },
  {
    title: "Sustainability Matters:",
    description:
      "Enerzyflow is committed to environmental responsibility. Our bottles are not just vessels for your brand but also a statement of your commitment to a greener planet.",
  },
  {
    title: "Exceptional Customer Service:",
    description:
      "Your satisfaction is our priority. Our dedicated team is always ready to assist you at every step, ensuring a seamless and enjoyable experience with Enerzyflow.",
  },
  {
    title: "Join Us on the Journey:",
    description:
      "Enerzyflow invites you to embark on a journey of brand elevation. Let us redefine the way your business is perceived with our premium quality mineral water bottles. Trust us to turn your brand into a refreshing experience!",
  },
];
const AboutComponents = () => {
  const ref = useRef(null)
 const {scrollYProgress}=useScroll(
  {
    target:ref,
    offset:["start end", "center start"]
  }
 )
  return (
    <div className="my-10">
      <div ref={ref} className=" md:w-[75%] w-full  md:mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 -top-[2px] w-[4px] h-full bg-black origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {AboutDetails.map((item, index) => {
            return <Details key={index} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutComponents;
