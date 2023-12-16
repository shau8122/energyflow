import AnimatedText from "../../_components/logocomponents/AnimatedText";
import AboutComponents from "./AboutContent";

const About = () => {
  return ( 
    <div className="w-full
    ">
       {/* //  bg-[#b9e2f5]/75 */}

    <div className="w-full max-w-[1080px] flex flex-col mt-20 sm:mt-0 items-center mx-auto  ">
      <AnimatedText text="About us" className="!text-6xl mt-10 lg:mt-0 text-[#0084CB] mb-5 md:mb-10" />
      <AnimatedText text="Welcome to Enerzyflow – Where Your Brand Finds Fluidity and Quality!" className="!text-3xl mx-3 text-[#0084CB] mb-5" />
      <p className="text-xl mx-3 text-justify text-gray-700">
      At Enerzyflow, we specialize in elevating your brand presence through our premium quality mineral water bottles. We understand that your brand is unique, and we are here to ensure that uniqueness is reflected in every drop.
      </p>
      <div className="w-full  md:mx-auto">

      <AboutComponents/>
      </div>
      <p className="text-2xl mb-5">
      Thank you for choosing Enerzyflow. 
      </p>

    </div>
    </div>
    
   );
}
 
export default About;