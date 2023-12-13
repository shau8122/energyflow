import Categories from "@/app/_components/categories/Categories";
import LogoComponent from "@/app/_components/logocomponents/LogoComponent";
import AboutHomePage from "../_components/about/AboutHomePage";
import WhatsappIcon from "@/components/WhatsappIcon";
import WhatsAppLink from "@/components/WhatsappIcon";
import Testimonials from "../_components/testimonials/Testimonials";

const Home = () => {
  return (
 <>
      <LogoComponent />
      <Categories />
      <AboutHomePage />
      {/* <WhatsappIcon/> */}
      <WhatsAppLink />
      <Testimonials/>
 </>
  );
};
export default Home;
