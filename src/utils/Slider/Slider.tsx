"use client";

import React, { useRef, useContext, useEffect } from "react";
import Image from "next/image";
import "./Slider.css";
import { MyContext } from "@/context/AppContext";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../public/images/indoVert1.png";
import img2 from "../../../public/images/thaiVert.png";
import img3 from "../../../public/images/nepalVert2.png";

const Slider = () => {
  const swiperRef = useRef<any>(null);
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("Slider must be used within a MyContext provider");
  }

  const { activeSlideIndex, setActiveSlideIndex } = context;

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setActiveSlideIndex(currentIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => handleSlideChange(swiper));
    }
  });

  const places = [
    {
      name: "Indonesian...",
      img: img1,
    },
    {
      name: "Thailand...",
      img: img2,
    },
    {
      name: "Nepal...",
      img: img3,
    },
  ];

  return (
    <div className="mr-14 shadow-xl">
      <Swiper
        slidesPerView={1}
        keyboard={true}
        spaceBetween={-100}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        ref={swiperRef}
        initialSlide={activeSlideIndex}
        grabCursor={true}
        // className="pl-[90px] pt-6"
      >
        {places.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                // width={400}
                // height={500}
                src={item.img}
                alt={item.name}
                className="object-cover shadow-xl object-center"
              />
              <div className="text">sample text</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
