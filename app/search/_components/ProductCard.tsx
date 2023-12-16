import ProductCarousel from "./ProductCarousel";

const ProductCard = () => {
  return (
    <div className="w-full h-[300px] bg-gray-900">
      <div className="W-full flex h-full ">
        <div className="w-[40%] h-full my-2">
          <ProductCarousel />
        </div>
        <div className="flex-1 pt-2 pl-5 h-full bg-red-200">
          <div>
            <h1 className="text-2xl font-bold">OYO Flagship Hotel Gour</h1>
            <p className="text-sm font-semibold">
              Near Axis Bank,Complex, Kharagpur
              <span className="text-xs text-red-400"> 0.0 km</span>
            </p>
            <h4 className="bg-green-200 text-green-700 inline-block p-2 text-xl font-bold">
              open now
            </h4>
            <div className="flex">
              <p className="text-sm bg-green-50 px-2 py-1 mr-2">3.4 &#9733;</p>
              <p className="text-sm">Fair</p>
            </div>
          </div>
          <div>
            <div>
              <p>₹811</p>
              <p>₹3688</p>
              <p>74% off</p>
              <p>+ ₹137 taxes & fees · per room per night</p>
            </div>
            <div>
              <button>View Details</button>
              <button>Book Now</button>
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
