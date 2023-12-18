"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import first from '@/public/bottle1.jpg'
import second from '@/public/bottle2.jpg'
import third from '@/public/bottle3.jpg'
import fourth from '@/public/bottle4.jpg'

interface ProductCarouselProps {
  imageUrls: string[];
}

const ProductCarousel:React.FC<ProductCarouselProps> = ({
  imageUrls
}) => {
  const images = [first, second, third, fourth];
  return (
    <Swiper
      navigation
      spaceBetween={10}
      slidesPerView={1}
      loop={true} // Enable the infinite loop
     
      modules={[Navigation]}
      // onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      className="w-full rounded-xl "
    >
      {
        imageUrls.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[268px] relative flex items-center justify-center">
              <Image src={image} fill alt="testimonials" className="rounded-lg object-cover" />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
export default ProductCarousel;
