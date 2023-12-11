import AnimatedText from "../_components/logocomponents/AnimatedText";
import AboutComponents from "./AboutContent";

const About = () => {
  return ( 
    <div className="w-full max-w-[1080px] flex flex-col items-center mx-auto ">
      <AnimatedText text="About us" className="!text-6xl text-[#50b8e7] mb-10" />
      <AnimatedText text="Welcome to Enerzyflow – Where Your Brand Finds Fluidity and Quality!" className="!text-3xl text-[#50b8e7] mb-5" />
      <p className="text-xl text-gray-700">
      At Enerzyflow, we specialize in elevating your brand presence through our premium quality mineral water bottles. We understand that your brand is unique, and we are here to ensure that uniqueness is reflected in every drop.
      </p>
      <div className="w-full  mx-auto">

      <AboutComponents/>
      </div>

{/* 

Thank you for choosing Enerzyflow. */}
    </div>
    
   );
}
 
export default About;