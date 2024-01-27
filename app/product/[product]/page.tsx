"use client";

import TopCarousel from "./_components/TopCarousel";
import ReviewsCard from "./_components/ReviewsCard";
import PoliciesAccordium from "./_components/PoliciesAccordium";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/libs/format";
import { PhoneCallIcon } from "lucide-react";
import { ProductType } from "@/app/search/_components/SearchResults";
import { useParams } from "next/navigation";
import { Bussiness } from "@prisma/client";
import { getBusinessById } from "@/data/business";

const ProductDetails = {
  Name: "Cozy Inn",
  Address: "123 Main Street, Cityville",
  Distance: 2.5,
  OpenClose: "Open",
  Rating: 4.2,
  RatingDescription: "Excellent",
  Facilities: ["Free Cancellation", "Free Wi-Fi", "Free Breakfast"],
  OriginalPricing: 120,
  OffPricePercentage: 15,
  NetPrice: 102,
  Tax: 8,
  ImageURLs: [
    "https://picsum.photos/id/1015/200/300",
    "https://picsum.photos/id/1016/200/300",
    "https://picsum.photos/id/1018/200/300",
    "https://picsum.photos/id/1020/200/300",
    "https://picsum.photos/id/1024/200/300",
  ],
};

const facilities = [
  {
    name: "Air Conditioning (AC)",
    icon: "❄️",
  },
  {
    name: "Free Wifi",
    icon: "📡",
  },
  {
    name: "Kitchen",
    icon: "🍳",
  },
  {
    name: "TV",
    icon: "📺",
  },
  {
    name: "Power Backup",
    icon: "⚡",
  },
  {
    name: "Geyser",
    icon: "🔥",
  },
  {
    name: "In-house Restaurant",
    icon: "🍽️",
  },
  {
    name: "CCTV Cameras",
    icon: "🎥",
  },
  {
    name: "Banquet Hall",
    icon: "🎉",
  },
  {
    name: "Reception",
    icon: "🛎️",
  },
  {
    name: "Daily Housekeeping",
    icon: "🧹",
  },
  {
    name: "Fire Extinguisher",
    icon: "🧯",
  },
  {
    name: "Attached Bathroom",
    icon: "🚿",
  },
];
const ratings = [76, 12, 30, 2, 50];
const reviews = [
  {
    name: "Emily",
    date: "3 days ago",
    rating: 4,
    star: "⭐⭐⭐⭐",
    review:
      "Great experience! The service was prompt, and the facilities were clean and well-maintained. Would definitely recommend to others.",
  },
  {
    name: "Alex",
    date: "1 week ago",
    rating: 5,
    star: "⭐⭐⭐⭐⭐",
    review:
      "Anurag Inn exceeded my expectations. The staff was friendly, the room was comfortable, and the in-house restaurant had delicious options. I'll be coming back for sure!",
  },
  {
    name: "Sophie",
    date: "5 days ago",
    rating: 3,
    star: "⭐⭐⭐",
    review:
      "Decent stay overall. The room was okay, but the Wi-Fi was a bit slow. Could use some improvement in terms of connectivity.",
  },
  {
    name: "Ryan",
    date: "2 weeks ago",
    rating: 5,
    star: "⭐⭐⭐⭐⭐",
    review:
      "I loved the ambiance! The AC worked perfectly, and the attached bathroom was clean. The attention to detail in the decor made my stay enjoyable.",
  },
  {
    name: "Isabella",
    date: "4 days ago",
    rating: 4,
    star: "⭐⭐⭐⭐",
    review:
      "Friendly staff and a cozy atmosphere. The in-house restaurant had a variety of options, and the location was convenient for exploring the city.",
  },
  {
    name: "Liam",
    date: "6 days ago",
    rating: 2,
    star: "⭐⭐",
    review:
      "Disappointed with the power backup. Experienced frequent outages during my stay, and it was quite inconvenient. Needs improvement in this aspect.",
  },
  {
    name: "Ava",
    date: "1 day ago",
    rating: 5,
    star: "⭐⭐⭐⭐⭐",
    review:
      "Absolutely fantastic! The room was spotless, and the staff went above and beyond to make my stay enjoyable. Will definitely be back.",
  },
  {
    name: "Ethan",
    date: "8 days ago",
    rating: 3,
    star: "⭐⭐⭐",
    review:
      "Average experience. The TV channels were limited, and the daily housekeeping was not up to the mark. Expected more for the price.",
  },
  {
    name: "Olivia",
    date: "2 days ago",
    rating: 5,
    star: "⭐⭐⭐⭐⭐",
    review:
      "Outstanding service! The geyser in the bathroom worked well, and the attached bathroom was clean and well-maintained. Highly recommended.",
  },
  {
    name: "Mia",
    date: "10 days ago",
    rating: 4,
    star: "⭐⭐⭐⭐",
    review:
      "Overall, a pleasant stay. The reception staff was helpful, and the banquet hall was perfect for the event I attended. Will consider staying again.",
  },
];

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [product, setProduct] = useState<ProductType>(ProductDetails);
  const [business, setBusiness] = useState<Bussiness | null>();
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (params.product) {
     
        const id = String(params.product)
        const bussiness = await getBusinessById(id);
        setBusiness(bussiness);
        console.log(bussiness)
      } else {
        const href = window.location.href;
        const productID = href.split("?")[1];
        const urldecode = decodeURIComponent(productID);
        const urldata = urldecode.split("=")[1];
        setProduct(JSON.parse(urldata));
      }
    };
  
    fetchData();
  
    return () => {

    };
  }, [params]);
  
  return (
    <div className="w-full ">
      {business !== null ? (
        <>
          <TopCarousel imagesList={business?.imgUrls} />
          <div className="max-w-[1200px] mx-auto ">
            <div className="relative flex w-full gap-10">
              <div className="w-[60%] flex flex-col gap-6 p-5 ">
                <div className="w-full justify-between flex">
                  <div className="w-3/4">
                    <h1 className="sm:text-3xl text-2xl font-bold text-slate-900">
                      {business?.title}
                    </h1>
                    <p className="text-sm font-semibold text-slate-400">
                      {business?.address || "Address"}
                      <span className="text-xs text-red-300">
                        {" "}
                        { 0} km
                      </span>
                    </p>
                  </div>
                  <div className="p-2 text-white text-center bg-lime-500">
                    <p className="text-sm  mr-2">
                      5 &#9733;
                    </p>
                    <p className="text-sm">{business?.about}</p>
                  </div>
                </div>
                <div className="bg-orange-100 inline-block font-semibold text-orange-500  text-sm mt-4 px-3 py-2 rounded-[10px]">
                  Safe and sanitised with daily temperature checks of our staff.
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Amenities
                  </h2>
                  <div className="grid grid-cols-2 text-slate-600 md:grid-cols-3 gap-2 mt-2">
                    {facilities.map((item, index) => {
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <p className="text-xl">{item.icon}</p>
                          <p className="text-sm">{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    About
                  </h2>
                  <p className="text-slate-600 mt-2">
                    {business?.title} is a modern and tasteful property with bright
                    rooms. The rooms are spacious and well-toned. The furniture
                    is elegant and the flooring is wooden. The reception is
                    charming and has modern sofas.
                  </p>
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Policies
                  </h2>
                  <PoliciesAccordium />
                  <Link className="text-blue-500 " href="/product/1/policies">
                    View all policies
                  </Link>
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Rating and Reviews
                  </h2>
                  <div className="mt-2 w-full items-center flex border ">
                    <div className="w-[40%]  flex items-center flex-col gap-2 p-4 text-center">
                      <p className="text-xl text-white px-2 py-1 bg-lime-500">
                        4.5 &#9733;
                      </p>
                      <p className="text-sm text-slate-900 font-semibold">
                        {business?.about}
                      </p>
                      <p className="text-sm text-slate-600">
                        100+ Ratings and Reviews
                      </p>
                    </div>
                    <div className="w-[60%] border-l flex items-center flex-col gap-1 p-4 text-center">
                      {ratings.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full flex items-center justify-between"
                          >
                            <p className="text-sm text-slate-600">
                              {index + 1} &#9733;
                            </p>
                            <div className="w-[60%] h-2 bg-gray-200 rounded-full">
                              <div
                                style={{
                                  width: `${item}%`,
                                }}
                                className="h-full bg-lime-500 rounded-full"
                              />
                            </div>
                            <p className="w-[10%]">{item}%</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    {reviews.map((item, index) => {
                      return <ReviewsCard key={index} {...item} />;
                    })}
                  </div>
                </div>
              </div>
              <div className="w-[40%] hidden p-10 lg:block sticky right-0 top-0 h-[30vh] shadow-md">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-xl text-slate-900 font-semibold">
                      {formatPrice(100)}
                    </p>
                    <p className="text-[16px] line-through text-slate-700">
                      {formatPrice(100)}
                    </p>
                    <p className="text-[16px] font-semibold text-orange-500">
                      {business?.discount}% off
                    </p>
                  </div>
                  <p className="text-sm text-slate-900">
                    + {formatPrice(10)} taxes & fees · per room per
                    night
                  </p>

                  <Button className="rounded-xl font-semibold text-xl w-full text-center mt-10  hover:bg-black text-white bg-[#0084CB] ">
                    <PhoneCallIcon size={20} className="mr-3" /> Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <TopCarousel imagesList={ProductDetails.ImageURLs} />
          <div className="max-w-[1200px] mx-auto ">
            <div className="relative flex w-full gap-10">
              <div className="w-[60%] flex flex-col gap-6 p-5 ">
                <div className="w-full justify-between flex">
                  <div className="w-3/4">
                    <h1 className="sm:text-3xl text-2xl font-bold text-slate-900">
                      {product.Name}
                    </h1>
                    <p className="text-sm font-semibold text-slate-400">
                      {product.Address || "Address"}
                      <span className="text-xs text-red-300">
                        {" "}
                        {product.Distance || 0} km
                      </span>
                    </p>
                  </div>
                  <div className="p-2 text-white text-center bg-lime-500">
                    <p className="text-sm  mr-2">
                      {product.Rating || 5} &#9733;
                    </p>
                    <p className="text-sm">{product.RatingDescription}</p>
                  </div>
                </div>
                <div className="bg-orange-100 inline-block font-semibold text-orange-500  text-sm mt-4 px-3 py-2 rounded-[10px]">
                  Safe and sanitised with daily temperature checks of our staff.
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Amenities
                  </h2>
                  <div className="grid grid-cols-2 text-slate-600 md:grid-cols-3 gap-2 mt-2">
                    {facilities.map((item, index) => {
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <p className="text-xl">{item.icon}</p>
                          <p className="text-sm">{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    About
                  </h2>
                  <p className="text-slate-600 mt-2">
                    {product.Name} is a modern and tasteful property with bright
                    rooms. The rooms are spacious and well-toned. The furniture
                    is elegant and the flooring is wooden. The reception is
                    charming and has modern sofas.
                  </p>
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Policies
                  </h2>
                  <PoliciesAccordium />
                  <Link className="text-blue-500 " href="/product/1/policies">
                    View all policies
                  </Link>
                </div>
                <div className=" flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Rating and Reviews
                  </h2>
                  <div className="mt-2 w-full items-center flex border ">
                    <div className="w-[40%]  flex items-center flex-col gap-2 p-4 text-center">
                      <p className="text-xl text-white px-2 py-1 bg-lime-500">
                        {product.Rating} &#9733;
                      </p>

                      <p className="text-sm text-slate-900 font-semibold">
                        {product.RatingDescription}
                      </p>
                      <p className="text-sm text-slate-600">
                        100+ Ratings and Reviews
                      </p>
                    </div>
                    <div className="w-[60%] border-l flex items-center flex-col gap-1 p-4 text-center">
                      {ratings.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full flex items-center justify-between"
                          >
                            <p className="text-sm text-slate-600">
                              {index + 1} &#9733;
                            </p>
                            <div className="w-[60%] h-2 bg-gray-200 rounded-full">
                              <div
                                style={{
                                  width: `${item}%`,
                                }}
                                className="h-full bg-lime-500 rounded-full"
                              />
                            </div>
                            <p className="w-[10%]">{item}%</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    {reviews.map((item, index) => {
                      return <ReviewsCard key={index} {...item} />;
                    })}
                  </div>
                </div>
              </div>
              <div className="w-[40%] hidden p-10 lg:block sticky right-0 top-0 h-[30vh] shadow-md">
                <div className="flex flex-col gap-2">
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
                    + {formatPrice(product.Tax)} taxes & fees · per room per
                    night
                  </p>

                  <Button className="rounded-xl font-semibold text-xl w-full text-center mt-10  hover:bg-black text-white bg-[#0084CB] ">
                    <PhoneCallIcon size={20} className="mr-3" /> Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
