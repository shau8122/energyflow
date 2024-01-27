// AutoplayCarousel.js
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
interface AutoplayCarouselProps {
  items: string[];
}

const AutoplayCarousel: React.FC<AutoplayCarouselProps> = ({ items }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true} // Enable the infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      scrollbar={{ draggable: true }}
      className="w-full h-full p-8 relative self-center"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full" key={index}>
            <Image
              key={index}
              fill
              sizes="100%"
              style={{
                objectFit: "cover",
              }}
              src={item}
              alt={`Slide ${index + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default AutoplayCarousel;
