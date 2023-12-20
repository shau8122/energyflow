"use client";
import {useEffect, useMemo, useState } from "react";
import LocationFilter from "./LocationFilter";
import ProductCard from "./ProductCard";
import { RatingFilter } from "./RatingFilter";
import PriceFilter from "./PriceFilter";

export type Product = {
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
  products: Product[];
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ products,query }) => {
  const [city, setCity] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [price, setPrice] = useState(0);
  const minPrice = Math.min(...products.map((product) => product.NetPrice));
  const maxPrice = Math.max(...products.map((product) => product.NetPrice));

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
  const searchAndSortedProductList = (products: Product[], search: string) => {
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
      <LocationFilter
        setCity={setCity}
        city={city}
        locations={ProductsLocation}
      />
      <RatingFilter setSelectedRating={setSelectedRating} />
      <PriceFilter
        minValue={minPrice}
        maxValue={maxPrice}
        value={price}
        setValue={setPrice}
      />
      {/* // gap-4 md:grid-cols-2 xl:grid-cols-3 */}
      <div className="flex flex-col my-4 gap-4">
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
