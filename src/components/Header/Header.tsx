"use client";

import React, { useContext } from "react";
import "./Header.css";
import { FaYoutube } from "react-icons/fa";
import Slider from "@/utils/Slider/Slider";

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
  // const { activeSlideIndex } = useContext();

  // const handleClass = (activeSlideIndex: number) => {
  //   const { country, title } = contentData[activeSlideIndex] || {};

  //   if (country && title) {
  //     return (
  //       <div>
  //         <h1>
  //           Explore <br />
  //           <span className={`country ${country}`} data-country={country}>
  //             {country}
  //           </span>
  //         </h1>
  //         <p className="text-white mt-[-70] p-2 w-[95%] font-semibold">
  //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
  //           sed dolor provident hic, delectus minima saepe laudantium dolore
  //           fugiat? Corrupti!
  //         </p>
  //       </div>
  //     );
  //   }

  //   return null;
  // };

  // const classChange = handleClass(activeSlideIndex);

  return (
    <section className="w-full">
      <div className="container">
        <div className="flex items-center mt-[40px]">
          {/*text content*/}
          {/* <div className="w-1/2 pl-[140px]">
            {classChange}
            <div className="mt-[100px] flex gap-12">
              <button
                type="button"
                className="border-2 border-btnBorder px-6 py-2 font-semibold text-white hover:text-btnBorder transition duration-300 ease-in-out"
              >
                Book Now
              </button>
              <button type="button">
                <FaYoutube />
                Watch Videos like this
              </button>
            </div>
          </div> */}

          <div className="w-1/2 flex flex-col items-end justify-end relative">
            <Slider />

            <div>Social Icons here</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
