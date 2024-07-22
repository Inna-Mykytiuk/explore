"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { MyContext } from "@/context/AppContext";
import HexagonText from "../HexagonText/HexagonText";
import datas from "@/data/reasonData";

const MostAttractive = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { activeSlideIndex } = context;

  const handleChange = (index: number) => {
    switch (index) {
      case 0:
        return datas[0];
      case 1:
        return datas[1];
      case 2:
        return datas[2];
      default:
        return datas[0];
    }
  };

  const infos = handleChange(activeSlideIndex);

  return (
    <section
      className="w-full bg-mainBcg pt-[120px] pb-[250px] overflow-hidden "
      id="reason"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="text-titleColor text-[76px] font-dancing">
            You should visit
          </h2>
          <h2 className="text-[54px] text-white font-montserrat font-medium leading-[50px]">
            Most Attractive Place
            <br />
            in {infos.name}
          </h2>
        </div>
      </div>

      <div
        className="flex justify-center mt-10 relative
      before:content-[''] before:absolute before:w-[450px] before:h-[400px] before:bg-mandalaLeft before:left-[-90px] before:top-[450px] before:z-10
      before:bg-cover before:opacity-50

      after:content-[''] after:absolute after:w-[450px] after:h-[400px] after:bg-mandalaLeft after:right-[-90px] after:top-[-300px] after:z-10
      after:bg-cover after:opacity-50
      "
      >
        <div className="bg-white w-[1px] h-[750px] flex flex-col justify-around items-center">
          <HexagonText
            alignment="left"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ab laudantium amet velit odio mollitia esse possimus reprehenderit facilis aliquid."
          />
          <HexagonText
            alignment="left"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ab laudantium amet velit odio mollitia esse possimus reprehenderit facilis aliquid."
          />
          <Image
            src={infos.leftImg1}
            alt="image"
            width={500}
            height={500}
            className="absolute top-[-150px]  left-[-30px] w-[500px] h-[500px] object-cover opacity-5"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="600"
          />
          <Image
            src={infos.leftImg2}
            alt="image"
            width={200}
            height={200}
            className="absolute top-[40px]  left-[500px] w-[200px] h-[200px] object-cover opacity-5"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="800"
          />
          <HexagonText
            alignment="right"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ab laudantium amet velit odio mollitia esse possimus reprehenderit facilis aliquid."
          />
          <HexagonText
            alignment="right"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ab laudantium amet velit odio mollitia esse possimus reprehenderit facilis aliquid."
          />
          <Image
            src={infos.rightImg1}
            alt="image"
            width={500}
            height={500}
            className="absolute top-[200px]  right-[-30px] w-[500px] h-[500px] object-cover opacity-5"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="600"
          />
          <Image
            src={infos.rightImg2}
            alt="image"
            width={200}
            height={200}
            className="absolute top-[390px]  right-[500px] w-[200px] h-[200px] object-cover opacity-5"
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="800"
          />

          <HexagonText
            alignment="left"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ab laudantium amet velit odio mollitia esse possimus reprehenderit facilis aliquid."
          />
        </div>
      </div>
    </section>
  );
};

export default MostAttractive;
