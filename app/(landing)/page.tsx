import Categories from "@/app/_components/categories/Categories";
import LogoComponent from "@/app/_components/logocomponents/LogoComponent";
import AboutHomePage from "../_components/about/AboutHomePage";
import WhatsappIcon from "@/components/WhatsappIcon";
import WhatsAppLink from "@/components/WhatsappIcon";
import Testimonials from "../_components/testimonials/Testimonials";
import WhyEnerzyflow from "../_components/whyenergzyflow/WhyEnergzyflow";

const Home = () => {
  return (
 <>
      <LogoComponent />
      <Categories />
      <AboutHomePage />
      {/* <WhatsappIcon/> */}
      <WhatsAppLink />
      <WhyEnerzyflow/>
      <Testimonials/>
 </>
  );
};
export default Home;
