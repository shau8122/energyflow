'use client'
import { useParams } from "next/navigation";
import  { CardComponent } from "./_components/Card";

const Home = () => {
  const { query: searchTerm } = useParams();

  return ( 
    <div>
      <h1>Home</h1>
      {searchTerm && <p>Search: {searchTerm}</p>}
      <CardComponent/>
    </div>
   );
}
 
export default Home;
