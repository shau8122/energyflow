
import { Metadata } from "next";
import ProductCard from "./_components/ProductCard";

interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - enerzyflow`,
  };
}

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  // const products = await prisma.product.findMany({
  //   where: {
  //     OR: [
  //       { name: { contains: query, mode: "insensitive" } },
  //       { description: { contains: query, mode: "insensitive" } },
  //     ],
  //   },
  //   orderBy: { id: "desc" },
  // });

  // if (products.length === 0) {
  //   return <div className="text-center">No products found</div>;
  // }

  return (
    // grid grid-cols-1 
    <div className=" flex flex-col
    max-w-[1080px] mx-auto 
    ">
      {/* // gap-4 md:grid-cols-2 xl:grid-cols-3 */}
      {/* {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))} */}
      <div className="text-center">No products found</div>
      <ProductCard/>
    </div>
  );
}
