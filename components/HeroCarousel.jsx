import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Define custom CSS styles
const customStyles = `
  .swiper-pagination-bullet {
    background-color: white; /* Change to whatever color you want */
    border-radius: 0; /* Remove border-radius */
    width: 25px; /* Adjust width as needed */
    height: 4px; /* Adjust height as needed */
    margin: 0 5px; /* Adjust margin as needed */
  }
`;

const HeroCarousel = () => {
  return (
    <>
      {/* Apply custom styles */}
      <style>{customStyles}</style>
      <Swiper
        spaceBetween={50} //5
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true, type: "bullets" }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //   pagination={false}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide className="">
          <div className="flex items-center text-left bg-gradient-to-b from-blue-800 to-black text-white rounded-3xl">
            <div className="w-1/2 px-8 flex flex-col gap-3">
              <h2 className="text-4xl font-bold">
                Have you heard of Multi-level Marketing
              </h2>
              <p className="text-lg mt-4">Description goes here</p>
              <button
                type="button"
                className="bg-white rounded-md text-blue-500 px-6 py-2 w-max"
              >
                Learn more
              </button>
            </div>
            <div className="w-1/2 p-8">
              <img
                src="https://placehold.co/100x50"
                alt="HeroCarousel Image"
                className="mx-auto"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex items-center text-left bg-gradient-to-b from-blue-800 to-black text-white rounded-3xl">
            <div className="w-1/2 px-8 flex flex-col gap-3">
              <h2 className="text-4xl font-bold">
                Have you heard of Multi-level Marketing
              </h2>
              <p className="text-lg mt-4">Description goes here</p>
              <button
                type="button"
                className="bg-white rounded-md text-blue-500 px-6 py-2 w-max"
              >
                Learn more
              </button>
            </div>
            <div className="w-1/2 p-8">
              <img
                src="https://placehold.co/100x50"
                alt="HeroCarousel Image"
                className="mx-auto"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
