"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import first from '@/public/bottle1.jpg'
import second from '@/public/bottle2.jpg'
import third from '@/public/bottle3.jpg'
import fourth from '@/public/bottle4.jpg'


const ProductCarousel = () => {
  const images = [first, second, third, fourth];
  return (
    <Swiper
      navigation
      spaceBetween={10}
      slidesPerView={1}
      loop={true} // Enable the infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
      modules={[Navigation, Autoplay]}
      // onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      className="w-full full rounded-lg"
    >
      {
        images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="w-full h-[280px]  relative flex items-center justify-center">
              <Image src={image} fill alt="testimonials" className="rounded-lg object-cover" />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
export default ProductCarousel;
