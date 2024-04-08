import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import { BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

export default () => {
  const slidesData = [
    {
      name: "Brenda Lee",
      position: "Managing Director",
      imageSrc: "/placeholder.svg",
      alt: "Brenda Lee",
    },
    {
      name: "Brenda Lee",
      position: "Managing Director",
      imageSrc: "/placeholder.svg",
      alt: "Brenda Lee",
    },
    {
      name: "Brenda Lee",
      position: "Managing Director",
      imageSrc: "/placeholder.svg",
      alt: "Brenda Lee",
    },
    {
      name: "Brenda Lee",
      position: "Managing Director",
      imageSrc: "/placeholder.svg",
      alt: "Brenda Lee",
    },
    {
      name: "Brenda Lee",
      position: "Managing Director",
      imageSrc: "/placeholder.svg",
      alt: "Brenda Lee",
    },
    {
      name: "Brenda Lee",
      position: "Managing Director",
      imageSrc: "/placeholder.svg",
      alt: "Brenda Lee",
    },
  ];

  return (
    <Swiper
      className="mySwiper p-0 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"
      spaceBetween={5}
      slidesPerView={1}
      modules={[Navigation]}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid items-center justify-center gap-4 p-2">
            <div className="flex aspect-square items-center justify-center rounded-lg overflow-hidden">
              <Image
                alt={slide.alt}
                className="aspect-square object-cover rounded-lg"
                height={250}
                src={slide.imageSrc}
                width={250}
              />
            </div>
            <span className="flex flex-col gap-2">
              <span className="flex justify-between gap-6">
                <p className="text-base font-semibold leading-none">
                  {slide.name}
                </p>
                <span className="flex gap-2">
                  <Link href="#" title="LinkedIn">
                    <BiLogoLinkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" title="Twitter">
                    <BiLogoTwitter className="w-5 h-5" />
                  </Link>
                  <Link href="#" title="Instagram">
                    <BiLogoInstagram className="w-5 h-5" />
                  </Link>
                </span>
              </span>
              <p className="text-sm text-start text-gray-500 dark:text-gray-400">
                {slide.position}
              </p>
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
