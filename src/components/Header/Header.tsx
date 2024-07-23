"use client";

import React, { useContext } from "react";
import "./Header.css";
import { FaYoutube } from "react-icons/fa";
import Slider from "@/utils/Slider/Slider";
import { MyContext } from "@/context/AppContext";
import { Link } from "react-scroll";

const contentData = [
  {
    country: "Indonesia",
    title: "Explore Indonesia",
    description:
      "Indonesia is an archipelago nation in Southeast Asia, comprising over 17,000 islands. It is known for its diverse cultures, languages, and vibrant landscapes, including beaches, volcanoes, and rainforests. The country has a rich history influenced by various civilizations and is the world's largest Muslim-majority nation.",
  },
  {
    country: "Thailand",
    title: "Explore Thailand",
    description:
      "Thailand is a Southeast Asian country famous for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha. The bustling capital, Bangkok, is known for its modern skyline juxtaposed with cultural landmarks. Thai cuisine, known for its balance of sweet, sour, salty, and spicy flavors, is celebrated worldwide.",
  },
  {
    country: "Nepal",
    title: "Explore Nepal",
    description:
      "Nepal is a landlocked country in South Asia, nestled in the Himalayas between China and India. It is renowned for its mountainous terrain, including Mount Everest, the world's highest peak. Nepal boasts a unique cultural heritage, with influences from Hinduism and Buddhism, and is known for its temples, festivals, and trekking routes.",
  },
];

const Header = () => {
  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { activeSlideIndex } = context;

  const handleClass = (activeSlideIndex: number) => {
    const { country, title, description } = contentData[activeSlideIndex] || {};

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
            {description}
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
              <Link
                to="contacts"
                smooth={true}
                spy={true}
                href="#"
                ignoreCancelEvents={true}
                className="border-1 px-6 py-2 font-semibold  hover:border-white transition-all duration-300 ease-in-out
                inline-block text-center no-underline  max-w-full cursor-pointer border border-white text-white bg-transparent hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)]
                "
              >
                Contact Us
              </Link>
              <button type="button" className="flex items-center gap-2">
                <FaYoutube className=" text-[40px] text-red-700" />
                <span className="text-white">Watch Videos</span>
              </button>
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-end justify-end relative smOnly:left-[260px] mdOnly:left-[400px] xlOnly:top-[-70px]">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
