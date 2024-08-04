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

const Collab = () => {
  const collaboratorLogos = [
    "/logos/basundhara_logo.jpg",
    "/logos/cherry_logo.jpg",
    "/logos/smart_pind.jpg",
    "/logos/mohor_logo.jpg",
    "/logos/paradise_logo.jpg",
    "/logos/taaz_logo.jpg",
    "/logos/vinayak_logo.jpg",
    "/logos/basundhara_logo.jpg",
    "/logos/cherry_logo.jpg",
    "/logos/smart_pind.jpg",
    "/logos/mohor_logo.jpg",
    "/logos/paradise_logo.jpg",
    "/logos/taaz_logo.jpg",
    "/logos/vinayak_logo.jpg",
  ];
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
        {collaboratorLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <CollaboratorsCard src={logo} />
          </SwiperSlide>
        ))}
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
};

export default Collab;
