"use client";

import React, { useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { FaYoutube } from "react-icons/fa";
import { MyContext } from "@/context/AppContext";
import { contentData } from "@/data/contentData";
import Slider from "@/utils/Slider/Slider";
import "./Header.css";

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
          <motion.h1
            className="text-[56px] leading-[56px] md:text-[96px] xl:text-[140px] text-white font-montserrat font-[800] md:leading-[84px] xl:leading-[140px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Explore <br />
            <span className={`country ${country}`} data-country={country}>
              {country}
            </span>
          </motion.h1>
          <motion.p
            className="text-white mt-[-10px] md:mt-[-40px] w-[95%] font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {description}
          </motion.p>
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
                Contacts
              </Link>
              <button type="button" className="flex items-center gap-2">
                <FaYoutube className=" text-[40px] text-red-700" />
                <span className="text-white">Watch Videos</span>
              </button>
            </div>
          </div>

          <motion.div
            className="w-1/3 flex flex-col items-end justify-end relative smOnly:left-[260px] mdOnly:left-[400px] xl:top-[-70px] xlOnly:left-[70px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Slider />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
