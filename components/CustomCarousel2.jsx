"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import images from "./images";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Define custom CSS styles
const customStyles = `
  .swiper-pagination-bullet {
    border-radius: 0; /* Remove border-radius */
    width: 25px; /* Adjust width as needed */
    height: 4px; /* Adjust height as needed */
    margin: 0 5px; /* Adjust margin as needed */
      }
`;

export default function CustomCarousel2() {
  return (
    <div className="border-2 p-5">
      <div className="cursor-grab overflow-hidden select-none flex-grow">
        {/* Apply custom styles */}
        <style>{customStyles}</style>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, type: "bullets" }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper p-0"
          breakpoints={{
            // For wide-screen devices
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide className="p-2 relative w-full" key={image}>
              <Image
                src={image}
                alt=""
                className="w-full h-full rounded-xl pointer-events-none mb-6"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
