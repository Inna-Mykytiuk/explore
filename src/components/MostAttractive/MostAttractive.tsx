"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import { MyContext } from "@/context/AppContext";
import BookTour from "@/utils/BookTour/BookTour";
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
      className="w-full bg-mainBcg pt-[120px] md:pt-[80px] xl:pt-[120px] pb-[120px] xl:pb-[200px] overflow-hidden "
      id="reason"
    >
      <div className="container">
        <div className="text-center">
          <motion.h2
            className="text-titleColor text-[76px] font-dancing text-center sm:text-start md:text-center leading-[60px] xl:leading-normal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            You should visit
          </motion.h2>
          <motion.h2
            className="text-[36px] md:text-[54px] text-white font-montserrat font-medium text-center sm:text-start md:text-center leading-[50px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Most Attractive Place
            <br />
            in {infos.name}
          </motion.h2>
        </div>
      </div>

      <div
        className="flex justify-start lg:justify-center mt-10 relative ml-[60px] sm:ml-[120px] lg:ml-0
      before:content-[''] before:absolute
      before:hidden sm:before:block
      before:w-[350px] before:h-[300px] 
      xl:before:w-[450px] xl:before:h-[400px] 
      before:top-[600px] 
      before:bg-mandalaLeft before:left-[-150px]  before:z-10
      before:bg-cover before:opacity-30

      after:content-[''] after:absolute
      after:hidden sm:after:block
      after:w-[350px] after:h-[300px] 
      xl:after:w-[450px] xl:after:h-[400px]
      after:top-[-250px] 
      after:bg-mandalaLeft after:right-[-90px]  after:z-10
      after:bg-cover after:opacity-30
      "
      >
        <div className="bg-white w-[1px] h-[750px] flex flex-col justify-around items-center">
          <HexagonText
            alignment="left"
            text="All three countries, Indonesia, Nepal, and Thailand, are renowned for their rich cultural heritage and vibrant traditions."
          />
          <HexagonText
            alignment="left"
            text="Each country offers unique landscapes, from Indonesia's lush rainforests and beaches, Nepal's towering Himalayan peaks, to Thailand's scenic coastlines."
          />
          <Image
            src={infos.leftImg1}
            alt="image"
            width={500}
            height={500}
            className="hidden lg:block absolute top-[-30px] left-0 w-[350px] h-[350px] xl:w-[500px] xl:h-[500px] object-cover opacity-5"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="600"
          />
          <Image
            src={infos.leftImg2}
            alt="image"
            width={200}
            height={200}
            className="hidden xl:block absolute top-[40px]  left-[500px] w-[200px] h-[200px] object-cover opacity-5"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="800"
          />
          <HexagonText
            alignment="left"
            text="All three countries, attracting millions of visitors annually for their, adventure tourism, and cultural experiences."
            additionalClassName="block lg:hidden"
          />
          <HexagonText
            alignment="left"
            text="The traditional cuisines of Indonesia, Nepal, and Thailand are globally celebrated for their distinct flavors."
            additionalClassName="block lg:hidden"
          />
          <HexagonText
            alignment="right"
            text="All three countries, attracting millions of visitors annually for their, adventure tourism, and cultural experiences."
            additionalClassName="hidden lg:block"
          />
          <HexagonText
            alignment="right"
            text="The traditional cuisines of Indonesia, Nepal, and Thailand are globally celebrated for their distinct flavors."
            additionalClassName="hidden lg:block"
          />
          <Image
            src={infos.rightImg1}
            alt="image"
            width={500}
            height={500}
            className="hidden lg:block absolute top-[270px] right-0 w-[350px] h-[350px] xl:w-[500px] xl:h-[500px] object-cover opacity-5"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="600"
          />
          <Image
            src={infos.rightImg2}
            alt="image"
            width={200}
            height={200}
            className="hidden xl:block absolute top-[390px]  right-[500px] w-[200px] h-[200px] object-cover opacity-5"
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="800"
          />
          <HexagonText
            alignment="left"
            text="Festivals play a crucial role in the cultural life of each country, with Indonesia celebrating events like Nyepi, Nepal observing Dashain and Tihar, and Thailand known for Songkran and Loy Krathong."
          />
        </div>
      </div>
      <BookTour className="justify-center mt-8 lg:mt-0" />
    </section>
  );
};

export default MostAttractive;
