"use client";



import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay ,Pagination} from "swiper/modules";

import "swiper/css";
import CollaboratorsCard from "./CollaboratorsCard";


const CollaboratorsCarousel = () => {

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      loop={true} // Enable the infinite loop
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
      pagination={{ clickable: true }}
      modules={[Autoplay,Pagination]}
      scrollbar={{ draggable: true }}
      className="w-full rounded-lg h-[150px]"
    >
      <SwiperSlide>
        <CollaboratorsCard />
      </SwiperSlide>
      <SwiperSlide>
        <CollaboratorsCard />
      </SwiperSlide>
      <SwiperSlide>
        <CollaboratorsCard />
      </SwiperSlide>
      <SwiperSlide>
        <CollaboratorsCard />
      </SwiperSlide>
      <SwiperSlide>
        <CollaboratorsCard />
      </SwiperSlide>
      <SwiperSlide>
        <CollaboratorsCard />
      </SwiperSlide>
      <SwiperSlide>
        <CollaboratorsCard />
      </SwiperSlide>
      <SwiperSlide>
        <CollaboratorsCard />
      </SwiperSlide>
    </Swiper>
  );
};
export default CollaboratorsCarousel;
