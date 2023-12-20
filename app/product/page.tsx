import { useRouter } from "next/navigation";
import ProductCarousel from "../search/_components/ProductCarousel";
import { Product } from "../search/_components/SearchResults";



const Home = () => {
  const router = useRouter();
  
  return (
    <div>
      <h1>Product name</h1>
      <h2>Product Description</h2>
    </div>
  );
};

export default Home;