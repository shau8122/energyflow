"use client";
import React, { useState, useEffect, useRef } from "react";
import "./carousel.css";
import Image from "next/image";
import img1 from "../public/bottle1.jpg";
import img2 from "../public/bottle2.jpg";
import img3 from "../public/bottle3.jpg";
import img4 from "../public/bottle4.jpg";
const cardDetails = [
  {
    image: img1,
    name: "Blanche Pearson",
    position: "Sales Manager",
  },
  {
    image: img2,
    name: "Joenas Brauers",
    position: "Web Developer",
  },
  {
    image: img3,
    name: "Lariach French",
    position: "Online Teacher",
  },
  {
    image: img4,
    name: "James Khosravi",
    position: "Freelancer",
  },
  {
    image: img1,
    name: "Kristina Zasiadko",
    position: "Bank Manager",
  },
  {
    image: img2,
    name: "Donald Horton",
    position: "App Designer",
  },
];
const Carousel = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const leftArrBtnsRef = useRef(null);
  const rightArrBtnsRef = useRef(null);
  const [isDragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [cardPerView, setCardPerView] = useState(0);
  const [isAutoPlay, setAutoPlay] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleArrowButtonClick = (text: string, width: any) => {
    if (!carouselRef) {
      console.log("error");
    } else {
      // carouselRef.current.scrollLeft += text === "left" ? -width : width;
    }
  };
  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   const wrapper = wrapperRef.current;
  //   if (!carousel || !wrapper) return;
  //   const firstCardWidth = carousel.children[0].offsetWidth;

  //   const carouselChildrens = [...carousel.children];

  //   // const handleArrowButtonClick = (btn: Element) => {
  //   //   carousel.scrollLeft +=
  //   //     btn.id === "left" ? -firstCardWidth : firstCardWidth;
  //   // };

  //   setCardPerView(Math.round(carousel.offsetWidth / firstCardWidth));

  //   carouselChildrens
  //     .slice(-cardPerView)
  //     .reverse()
  //     .forEach((card) => {
  //       carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  //     });

  //   carouselChildrens.slice(0, cardPerView).forEach((card) => {
  //     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  //   });

  //   carousel.classNameList.add("no-transition");
  //   carousel.scrollLeft = carousel.offsetWidth;
  //   carousel.classNameList.remove("no-transition");

  //   const handleDragStart = (e: { pageX: React.SetStateAction<number> }) => {
  //     setDragging(true);
  //     carousel.classNameList.add("dragging");
  //     setStartX(e.pageX);
  //     setStartScrollLeft(carousel.scrollLeft);
  //   };

  //   const handleDragging = (e: { pageX: number }) => {
  //     if (!isDragging) return;
  //     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  //   };

  //   const handleDragStop = () => {
  //     setDragging(false);
  //     carousel.classNameList.remove("dragging");
  //   };

  //   const handleInfiniteScroll = () => {
  //     if (carousel.scrollLeft === 0) {
  //       carousel.classNameList.add("no-transition");
  //       carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
  //       carousel.classNameList.remove("no-transition");
  //     } else if (
  //       Math.ceil(carousel.scrollLeft) ===
  //       carousel.scrollWidth - carousel.offsetWidth
  //     ) {
  //       carousel.classNameList.add("no-transition");
  //       carousel.scrollLeft = carousel.offsetWidth;
  //       carousel.classNameList.remove("no-transition");
  //     }

  //     clearTimeout(timeoutId);
  //     if (!wrapper.matches(":hover")) autoPlay();
  //   };

  //   const autoPlay = () => {
  //     if (window.innerWidth < 800 || !isAutoPlay) return;
  //     setTimeoutId(
  //       setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500)
  //     );
  //   };

  //   autoPlay();

  //   carousel.addEventListener("mousedown", handleDragStart);
  //   carousel.addEventListener("mousemove", handleDragging);
  //   document.addEventListener("mouseup", handleDragStop);
  //   carousel.addEventListener("scroll", handleInfiniteScroll);
  //   wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  //   wrapper.addEventListener("mouseleave", autoPlay);

  //   return () => {
  //     carousel.removeEventListener("mousedown", handleDragStart);
  //     carousel.removeEventListener("mousemove", handleDragging);
  //     document.removeEventListener("mouseup", handleDragStop);
  //     carousel.removeEventListener("scroll", handleInfiniteScroll);
  //     wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
  //     wrapper.removeEventListener("mouseleave", autoPlay);
  //   };
  // }, [cardPerView, isAutoPlay, timeoutId, isDragging, startX, startScrollLeft]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1100px] relative" ref={wrapperRef}>
        <button
          id="left"
          ref={leftArrBtnsRef}
          className="cursor-pointer absolute text-center bg-white shadow-md rounded-full  text-xl top-1/2 transform -translate-y-1/2 transition-transform duration-100 ease-linear p-2 active:scale-85 left-[-22px]"
        >
          left
        </button>
        {/* scroll-snap-x-mandatory */}
        <ul
          className="carousel w-full grid grid-flow-col auto-cols-min overflow-x-auto gap-4 md:gap-16 rounded-lg scroll-smooth scrollbar-none"
          ref={carouselRef}
        >
          {cardDetails.map((cardDetail, i) => {
            return (
              // scroll-snap-align-start
              <li
                key={i}
                className="justify-around items-center h-[342px] list-none bg-white cursor-pointer pb-10 flex flex-col rounded-lg"
              >
                <div className=" bg-purple-600 h-[148px] w-[148px] rounded-full flex justify-center items-center">
                  <Image
                    className="w-[140px] h-[140px] rounded-full object-cover border-4 border-white"
                    src={cardDetail.image}
                    height={100}
                    width={100}
                    alt="Image"
                    draggable="false"
                  />
                </div>
                <h2 className="font-semibold text-lg mt-30 mb-5">
                  {cardDetail.name}
                </h2>
                <span className="text-gray-600 text-sm">
                  {cardDetail.position}
                </span>
              </li>
            );
          })}
        </ul>
        <button
          id="right"
          ref={rightArrBtnsRef}
          // onClick={handleArrowButtonClick}
          className="cursor-pointer absolute text-center bg-white shadow-md rounded-full  text-xl top-1/2 transform -translate-y-1/2 transition-transform duration-100 ease-linear right-[-22px] p-2"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
