"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "@/libs/Image";
import TestimonialsCard from "./TestimonialsCard";

const testimonials = [
  {
    name: "Subroto Layek",
    place: "Hotel Basundhara",
    description:
      "I absolutely love the branded water bottles provided by this hotel! They're always readily available, and the design is sleek and stylish. It's a thoughtful touch that adds to the overall experience of my stay.",
  },
  {
    name: "Sayan Kar",
    place: "Wonder Inn",
    description:
      "Impressed by the quality of service here. The branded water bottles are a nice touch, especially when I'm exploring the city or lounging by the pool. It's refreshing to see a hotel prioritize guest hydration with such attention to detail.",
  },
  {
    name: "Pragya Shukla",
    place: "Hotel Relook",
    description:
      "This hotel's commitment to sustainability shines through with their use of branded water bottles. I appreciate their eco-friendly approach while still providing a convenient amenity for guests. It's a win-win!",
  },
  {
    name: "Shivani Saha",
    place: "Hotel Prince",
    description:
      "The complimentary branded water bottles are a standout feature of this hotel. It's a small gesture that goes a long way in enhancing the guest experience. Plus, the bottles are durable and perfect for taking on outings during my stay.",
  },
  {
    name: "Kamal Adani",
    place: "Tribit Kitchen",
    description:
      "The branded water bottles are a delightful surprise! They're always stocked in my room, making it easy to stay hydrated while exploring the city. It's the little touches like this that set this hotel apart from the rest.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <Swiper
      navigation
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
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
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialsCard
            name={testimonial.name}
            place={testimonial.place}
            description={testimonial.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TestimonialsCarousel;
