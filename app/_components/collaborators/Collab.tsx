"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import CollaboratorsCard from "./CollaboratorsCard";
import { MoveLeft, MoveRight } from "lucide-react";

function Collab() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="h-[400px] p-8 relative self-center"
      >
        <SwiperSlide className="">
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
      <div className="slider-controler !-bottom-4">
        {/* <div className="swiper-button-prev slider-arrow">
          <MoveLeft className="h-10 w-10" />
        </div>
        <div className="swiper-button-next slider-arrow">
          <MoveRight className="h-10 w-10" />
        </div> */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Collab;
