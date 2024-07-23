"use client";

import React, { useContext } from "react";
import "./Header.css";
import { FaYoutube } from "react-icons/fa";
import Slider from "@/utils/Slider/Slider";
import { MyContext } from "@/context/AppContext";

const contentData = [
  {
    country: "Indonesia",
    title: "Explore Indonesia",
  },
  {
    country: "Thailand",
    title: "Explore Thailand",
  },
  {
    country: "Nepal",
    title: "Explore Nepal",
  },
];

const Header = () => {
  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { activeSlideIndex } = context;

  const handleClass = (activeSlideIndex: number) => {
    const { country, title } = contentData[activeSlideIndex] || {};

    if (country && title) {
      return (
        <>
          <h1 className="text-[56px] leading-[56px] md:text-[96px] xl:text-[140px] text-white font-montserrat font-[800] md:leading-[84px] xl:leading-[140px]">
            Explore <br />
            <span className={`country ${country}`} data-country={country}>
              {country}
            </span>
          </h1>
          <p className="text-white mt-[-10px] md:mt-[-40px] w-[95%] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            veniam accusamus doloribus, quidem sequi recusandae omnis facere,
            debitis ad soluta doloremque. Sed eveniet magnam minima omnis
            sapiente? Neque, incidunt asperiores?
          </p>
        </>
      );
    }

    return null;
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <section className="w-full mt-[50px] md:mt-[40px] xl:mt-[100px]">
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between">
          {/*text content*/}
          <div className="max-w-[600px] xxl:max-w-[800px]">
            {classChange}
            <div className="mt-8 mb-8 xl:mt-[100px] flex gap-12">
              <button
                type="button"
                className="border-1 px-6 py-2 font-semibold  hover:border-white transition-all duration-300 ease-in-out
                inline-block text-center no-underline  max-w-full cursor-pointer border border-white text-white bg-transparent hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)]
                "
              >
                Contact Us
              </button>
              <button type="button" className="flex items-center gap-2">
                <FaYoutube className=" text-[40px] text-red-700" />
                <span className="text-white">Watch Videos</span>
              </button>
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-end justify-end relative  smOnly:left-[260px] mdOnly:left-[400px]">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
