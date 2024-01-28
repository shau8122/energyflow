"use client";
import {useEffect, useMemo, useState } from "react";
import LocationFilter from "./LocationFilter";
import ProductCard from "./ProductCard";
import { RatingFilter } from "./RatingFilter";
import PriceFilter from "./PriceFilter";
import { Bussiness } from "@prisma/client";

export type ProductType = {
  Name: string;
  Address: string;
  Distance: number;
  OpenClose: string;
  Rating: number;
  RatingDescription: string;
  Facilities: string[];
  OriginalPricing: number;
  OffPricePercentage: number;
  NetPrice: number;
  Tax: number;
  ImageURLs: string[];
};

interface SearchResultsProps {
  products: ProductType[];
  query: string;
  prod:Bussiness[]
}

const SearchResults: React.FC<SearchResultsProps> = ({ products,query,prod }) => {
  const [city, setCity] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [price, setPrice] = useState(0);
  const minPrice = Math.min(...products.map((product) => product.NetPrice));
  const maxPrice = Math.max(...products.map((product) => product.NetPrice));
  const newProd = useMemo(() => {
    return prod.map((prodi) => ({
      Name: prodi.title || "",
      Address: prodi.address||"",
      Distance: 2.5,
      OpenClose: "Open",
      Rating: 4.2,
      RatingDescription: "Excellent",
      Facilities: ["Free Cancellation", "Free Wi-Fi", "Free Breakfast"],
      OriginalPricing: prodi.price || 100,
      OffPricePercentage: prodi.discount || 20,
      NetPrice: 102,
      Tax: 8,
      ImageURLs: prodi.imgUrls || [],
      id:prodi.id
    }));
  }, [prod]);
  
  const uniqueAddresses: string[] = products.reduce(
    (unique: string[], product) => {
      const lowerCaseAddress = product.Address.toLowerCase();
      const parts = lowerCaseAddress.split(", ");
      if (unique.indexOf(parts[parts.length - 1]) === -1) {
        unique.push(parts[parts.length - 1]);
      }
      return unique;
    },
    []
  );
  const ProductsLocation = uniqueAddresses.map((address) => ({
    label: address,
    value: address,
  }));
  const searchAndSortedProductList = (products: ProductType[], search: string) => {
    return products
      .filter((product) => {
        return product.Address.toLowerCase().includes(search.toLowerCase());
      })
      .sort((a, b) => {
        return a.Distance - b.Distance;
      });
  };
  const filteredProducts = useMemo(() => {
    const filteredProductsOnLocation = searchAndSortedProductList(products, city);
  
    if (selectedRating) {
      return filteredProductsOnLocation.filter((product) => product.Rating >= parseInt(selectedRating));
    } else if (price) {
      return filteredProductsOnLocation.filter((product) => product.NetPrice >= price);
    } else {
      return filteredProductsOnLocation;
    }
  }, [products, city, selectedRating, price]);
 
  return (
    <div>
      <div>
      <h1 className="text-3xl font-semibold text-start mb-4">
      {filteredProducts.length} search result for: <span className="text-[#0084CB]">{query}</span>
      </h1>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <div className="w-[20%]">

      <LocationFilter
        setCity={setCity}
        city={city}
        locations={ProductsLocation}
      />
        </div>
      <RatingFilter setSelectedRating={setSelectedRating} />
      <div className="flex-1">

      <PriceFilter
        minValue={minPrice}
        maxValue={maxPrice}
        value={price}
        setValue={setPrice}
      />
      </div>
      </div>
      {/* // gap-4 md:grid-cols-2 xl:grid-cols-3 */}
      <div className="flex flex-col my-4 gap-4">
        { newProd!=null &&
          newProd.map((prodi,index)=>(
            <ProductCard isId id={prodi.id} product={prodi} key={index} />
          ))
        }
        {filteredProducts.length === 0 && (
          <div className="text-center text-xl font-semibold">
            No products found for{" "}
            <span className="text-red-500">{city.toUpperCase()}</span> and{" "}
            <span className="text-red-500"> {selectedRating}</span>
          </div>
        )}
        {filteredProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      {/* {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))} */}
      {/* <div className="text-center">No products found for {query}</div> */}
    </div>
  );
};

export default SearchResults;
