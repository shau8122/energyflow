"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarouselImage from "./CarouselImage";

interface TopCarouselProps {
  imagesList: string[] | undefined;
}

const TopCarousel:React.FC<TopCarouselProps> = ({
  imagesList
}) => {
  return (
    <Swiper
      navigation
      spaceBetween={2}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
     
      loop={true} // Enable the infinite loop

      modules={[Navigation]}
      // onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      className="w-full rounded-lg "
    >
      { imagesList &&
        imagesList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouselImage imageURL={item} />
            </SwiperSlide>
          )
        })
      }
     
      
    </Swiper>
  );
};
export default TopCarousel;
