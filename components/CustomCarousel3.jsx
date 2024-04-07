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

export default function CustomCarousel3() {
  // Group images into sets of 4
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    groupedImages.push(images.slice(i, i + 4));
  }

  // Placeholder image link
  const placeholderImage = "https://placehold.co/300?text=1";
  //   https://via.placeholder.com/300

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
              slidesPerView: 1, // Change back to 1 slide per view
            },
          }}
        >
          {/* Render each group of 4 images on a slide */}
          {groupedImages.map((group, index) => (
            <SwiperSlide className="p-2 relative w-full" key={index}>
              <div className="flex justify-between gap-4">
                {group.map((_, idx) => (
                  <img
                    src={placeholderImage}
                    alt=""
                    key={idx}
                    className="w-full h-full flex-1 rounded-xl pointer-events-none mb-6"
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
