import Categories from "@/app/_components/categories/Categories";
import LogoComponent from "@/app/_components/logocomponents/LogoComponent";
import AboutHomePage from "../_components/about/AboutHomePage";

import WhatsAppLink from "@/components/WhatsappIcon";

import WhyEnerzyflow from "../_components/whyenergzyflow/WhyEnergzyflow";
import Testimonials from "../_components/testimonials/Testimonials";
import Collaborators from "../_components/collaborators/Collaborators";



const Home = () => {
  return (
 <>
      <LogoComponent />
      <Categories />
      <AboutHomePage />
      <WhatsAppLink />
      <WhyEnerzyflow/>
      <Collaborators/>
      <Testimonials/>

 </>
  );
};
export default Home;
