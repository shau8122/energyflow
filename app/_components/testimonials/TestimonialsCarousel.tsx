"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "@/lib/Image";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialsCarousel = () => {
  return (
    <Swiper
      navigation
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
   
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        
       
      }}
     
      loop={true} // Enable the infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
      modules={[Navigation, Autoplay]}
      // onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      className="w-full rounded-lg"
    >
      <SwiperSlide>
        <TestimonialsCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsCard />
      </SwiperSlide>
    </Swiper>
  );
};
export default TestimonialsCarousel;
