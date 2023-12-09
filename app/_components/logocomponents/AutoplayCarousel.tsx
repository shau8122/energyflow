// AutoplayCarousel.js
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface AutoplayCarouselProps {
  items: string[];
}

const AutoplayCarousel: React.FC<AutoplayCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Adjust the autoplay interval in milliseconds

    return () => clearInterval(intervalId);
  }, [items.length]);

  return (
 
    <Carousel
    className="w-full mx-auto"
    infiniteLoop
    showThumbs={false}
    showArrows={false}
    showStatus={false}
    selectedItem={currentIndex}
    autoPlay
    interval={3000}
  >
    {items.map((item, index) => (
      <div className="relative" key={index}>
        <Image
          key={index}
          width={500}
          height={500}
          onClick={() => console.log("clicked")}
          className="object-cover"
          src={item}
          alt={`Slide ${index + 1}`}
        />
      </div>
       
     
    ))}
  </Carousel>
    
  );
};

export default AutoplayCarousel;
