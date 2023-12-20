
'use client'
import { Product } from "@/app/search/_components/SearchResults";
import { useParams, usePathname, useRouter } from "next/navigation";



const Home = () => {
  const pathname= usePathname()
  const params =useParams()
  return ( 
    <div>
      Home
      {
        pathname
      }
    </div>
   );
}
 
export default Home;