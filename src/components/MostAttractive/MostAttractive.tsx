"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { MyContext } from "@/context/AppContext";

import img1 from "../../../public/set/indonesia/indoBgLeft.png";
import img2 from "../../../public/set/thai/1.jpg";
import img3 from "../../../public/set/nepal/1.jpg";

import img4 from "../../../public/set/indonesia/indoBgRight.png";
import img5 from "../../../public/set/thai/2.jpg";
import img6 from "../../../public/set/nepal/2.jpg";

import img7 from "../../../public/set/indonesia/indoBglittle.png";
import img8 from "../../../public/set/thai/3.jpg";
import img9 from "../../../public/set/nepal/3.jpg";

import img10 from "../../../public/set/indonesia/indoBglittle1.png";
import img11 from "../../../public/set/thai/4.jpg";
import img12 from "../../../public/set/nepal/4.jpg";

import img13 from "../../../public/set/indonesia/5.jpg";
import img14 from "../../../public/set/thai/5.jpg";
import img15 from "../../../public/set/nepal/5.jpg";

import bgLeft from "../../../public/images/indoBg1.jpg";
import bgRight from "../../../public/images/nepalBg1.jpg";

import { BsHexagonFill } from "react-icons/bs";
import HexagonText from "../HexagonText/HexagonText";

const MostAttractive = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { activeSlideIndex } = context;

  const datas = [
    {
      name: "Indonesia",
      leftImg1: img1,
      leftImg2: img7,
      leftImg3: img13,
      rightImg1: img4,
      rightImg2: img10,
    },
    {
      name: "Thailand",
      leftImg1: img2,
      leftImg2: img8,
      leftImg3: img14,
      rightImg1: img5,
      rightImg2: img11,
    },
    {
      name: "Indonesia",
      leftImg1: img3,
      leftImg2: img9,
      leftImg3: img15,
      rightImg1: img6,
      rightImg2: img12,
    },
  ];

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

      <div className="flex justify-center mt-10 relative">
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
