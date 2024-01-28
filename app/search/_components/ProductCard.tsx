"use client";
import { Button } from "@/components/ui/button";
import ProductCarousel from "./ProductCarousel";
import { formatPrice } from "@/libs/format";
import { useRouter } from "next/navigation";
import { ProductType } from "./SearchResults";

interface ProductCardProps {
  product: ProductType;
  isId?:boolean;
  id?:string
}

const ProductCard: React.FC<ProductCardProps> = ({ product,id,isId }) => {
  const router = useRouter();

  const handleClick = () => {
    if(id){
      router.push(`/product/${id}?data=id`)
    }else{

      router.push(
        `/product/${product.Name.replace(/\s/g, "-")}?data=${JSON.stringify(
          product
        )}`
      )
    }
  };
  return (
    <div className="w-full  h-auto border sm:h-[300px]  shadow-sm hover:shadow-xl p-4  rounded-xl">
      <div className="W-full flex sm:flex-row flex-col items-center h-full ">
        <div className="w-full sm:w-[40%] m-auto rounded-xl">
          <ProductCarousel imageUrls={product.ImageURLs} />
        </div>
        <div className="flex-1 mt-5 sm:mt-0 gap-4 sm:gap-0 flex justify-between items-start flex-col sm:ml-5 h-full">
          <div className=" w-full">
            <h1 className="sm:text-2xl text-xl font-bold text-slate-900">
              {product.Name || "Hotel Name"}
            </h1>
            <p className="text-sm font-semibold text-slate-800">
              {product.Address || "Address"}
              <span className="text-xs text-red-400">
                {" "}
                {product.Distance || 0} km
              </span>
            </p>
          </div>
          <div className="flex flex-col w-full">
            <h4 className=" text-lime-600  text-lg font-semibold">
              Now {product.OpenClose || "Close"}
            </h4>
            <div className="flex items-center ">
              <p className="text-sm  px-2 py-1 mr-2">
                {product.Rating || 5} &#9733;
              </p>
              <p className="text-[16px]">{product.RatingDescription}</p>
            </div>
            <ul className="flex  pl-4 gap-7 list-disc">
              {product.Facilities.map((facility, index) => (
                <li className="text-sm text-slate-900" key={index}>
                  {facility}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-2 w-full md:flex-row">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-xl text-slate-900 font-semibold">
                  {formatPrice(product.NetPrice)}
                </p>
                <p className="text-[16px] line-through text-slate-700">
                  {formatPrice(product.OriginalPricing)}
                </p>
                <p className="text-[16px] font-semibold text-orange-500">
                  {product.OffPricePercentage}% off
                </p>
              </div>
              <p className="text-sm text-slate-900">
                + {formatPrice(product.Tax)} taxes & fees · per room per night
              </p>
            </div>
            <div className="flex sm:w-auto w-full justify-between items-center gap-2">
              <Button
               variant={"outline"}
                className="rounded-xl font-semibold text-[16px]"
                onClick={handleClick}
              >
                View Details
              </Button>
              <Button className="rounded-xl font-semibold text-[16px] hover:bg-black text-white bg-[#0084CB] ">
                Book Now
              </Button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// ₹811
// ₹3688
// 74% off
// + ₹137 taxes & fees · per room per night

// View Details

// Book Now
