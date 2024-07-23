import Categories from "@/app/_components/categories/Categories";
import LogoComponent from "@/app/_components/logocomponents/LogoComponent";
import AboutHomePage from "../_components/about/AboutHomePage";

import WhatsAppLink from "@/components/WhatsappIcon";

import WhyEnerzyflow from "../_components/whyenergzyflow/WhyEnergzyflow";
import Testimonials from "../_components/testimonials/Testimonials";
import Collaborators from "../_components/collaborators/Collaborators";
import Collab from "../_components/collaborators/Collab";
import QueryIcon from "@/components/QueryIcon";
import Branding from "../_components/branding/Branding";

const Home = () => {
  return (
    <>
      <LogoComponent />
      <Categories />
      <Branding />
      <AboutHomePage />
      <WhatsAppLink />
      <QueryIcon />
      <WhyEnerzyflow />
      {/* <Collab/> */}
      <Collaborators />
      <Testimonials />
    </>
  );
};
export default Home;
