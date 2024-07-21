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
        <div>
          <h1 className="text-[144px] text-white font-montserrat font-[800] leading-[140px]">
            Explore <br />
            <span className={`country ${country}`} data-country={country}>
              {country}
            </span>
          </h1>
          <p className="text-white mt-[-70] w-[95%] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            veniam accusamus doloribus, quidem sequi recusandae omnis facere,
            debitis ad soluta doloremque. Sed eveniet magnam minima omnis
            sapiente? Neque, incidunt asperiores?
          </p>
        </div>
      );
    }

    return null;
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <section className="w-full">
      <div className="container">
        <div className="flex items-center justify-between mt-[40px]">
          {/*text content*/}
          <div className="max-w-[800px]">
            {classChange}
            <div className="mt-[100px] flex gap-12">
              <button
                type="button"
                className="border-2 border-btnBorder px-6 py-2 font-semibold text-btnBorder hover:text-white hover:border-white transition duration-300 ease-in-out"
              >
                Book Now
              </button>
              <button type="button" className="flex items-center gap-2">
                <FaYoutube className=" text-[40px] text-red-700" />
                <span className="text-white">Watch Videos like this</span>
              </button>
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-end justify-end relative">
            <Slider />
            <div>Social Icons here</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
