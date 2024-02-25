"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import images from "./images";
import { destination } from "./images";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CustomCarousel() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="flex justify-between gap-8 border-2 p-5">
      {/* Left container with heading, paragraph, and controls */}
      <div className="p-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">Best Trip Prices</h1>
          <p className="text-xl">Bringing you more routes at the best fares.</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <button
            className="text-2xl text-white bg-black py-2 px-4 rounded-full"
            onClick={goPrev}
          >
            ←
          </button>
          <button
            className="text-2xl text-white bg-black py-2 px-4 rounded-full"
            onClick={goNext}
          >
            →
          </button>
        </div>
      </div>

      {/* Right container with Swiper */}
      <div className="cursor-grab overflow-hidden select-none flex-grow">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper p-0"
          ref={swiperRef}
        >
          {images.map((image, index) => (
            <SwiperSlide className="p-2 relative" key={image}>
              <Image
                src={image}
                alt=""
                className="w-full h-full rounded-xl pointer-events-none"
              />
              <div className="absolute bottom-0 left-0 w-full h-max bg-transparent backdrop-blur-[5px] mx-2 px-4 py-6">
                <p className="text-white text-lg mb-6 text-center">
                  {destination[index].title}
                </p>
                <button className="bg-blue-500 text-sm text-center text-white rounded-md py-3 px-6">
                  Book Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// "use client";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import images, { destination } from "./images";

// export default function CustomCarousel() {
//   const swiperRef = useRef(null);

//   const goNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const goPrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <div className="lg:flex space-y-10 lg:space-y-0 justify-between gap-8 border-2 border-black px-5 py-10 my-10 h-[80vh]">
//       {/* Left container with heading, paragraph, and controls */}
//       <div className="p-4 flex-none justify-center flex flex-col">
//         <div className="space-y-2">
//           <h1 className="text-6xl font-bold">Best Trip Prices</h1>
//           <p className="text-xl">Bringing you more routes at the best fares.</p>
//         </div>
//         <div className="mt-4 flex justify-center space-x-2">
//           <button
//             className="text-2xl text-white bg-black py-2 px-4 rounded-full"
//             onClick={goPrev}
//           >
//             ←
//           </button>
//           <button
//             className="text-2xl text-white bg-black py-2 px-4 rounded-full"
//             onClick={goNext}
//           >
//             →
//           </button>
//         </div>
//       </div>

//       {/* Right container with Swiper */}
//       <div className="cursor-grab flex flex-col justify-center overflow-hidden select-none flex-1">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={5}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={false}
//           navigation={false}
//           modules={[Autoplay]}
//           className="mySwiper p-0 w-3/4 h-3/4 mx-auto"
//           ref={swiperRef}
//           breakpoints={{
//             // For mobile devices
//             768: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {images.map((image, index) => (
//             <SwiperSlide
//               className="p-2 relative text-center justify-center flex"
//               key={image}
//             >
//               <Image
//                 src={image}
//                 alt=""
//                 className="w-full h-full rounded-xl pointer-events-none object-cover block"
//               />
//               <div className="absolute bottom-0 left-0 w-full h-max bg-transparent backdrop-blur-[5px] mx-2 px-4 py-6">
//                 <p className="text-white text-lg mb-6 text-center">
//                   {destination[index].title}
//                 </p>
//                 <button className="bg-blue-500 text-sm text-center text-white rounded-md py-3 px-6">
//                   Book Now
//                 </button>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
