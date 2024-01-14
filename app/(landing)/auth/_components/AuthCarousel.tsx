"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import {images} from '@/libs/Image'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AuthImage from "./AuthImage";




const AuthCarousel = () => {
  return (
    <Swiper
      navigation
      spaceBetween={10}
      slidesPerView={1}
      loop={true} // Enable the infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
      modules={[Navigation, Autoplay]}
      scrollbar={{ draggable: true }}
      className="w-full rounded-lg"
    >
      
      {
        images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <AuthImage/>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};
export default AuthCarousel;
