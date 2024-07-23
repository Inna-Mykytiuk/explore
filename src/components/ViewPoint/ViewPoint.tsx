"use client";

import React, { useState, useEffect } from "react";
import "./ViewPoint.css";

import Image from "next/image";
import { BiSolidCalendar } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";

import img1 from "../../../public/images/indoBg1.jpg";
import img2 from "../../../public/images/thaiBg.png";
import img3 from "../../../public/images/nepalBg1.jpg";
import img4 from "../../../public/images/thai.jpg";
import BookTour from "@/utils/BookTour/BookTour";

const ViewPoint = () => {
  const [state, setState] = useState(2);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [state]);

  const handleSelected = (index: number) => {
    setIsVisible(false);
    setState(index);
  };

  const handleImages = () => {
    switch (state) {
      case 0:
        return img1;
      case 1:
        return img2;
      case 2:
        return img3;
      case 3:
        return img4;
      default:
        return img1;
    }
  };

  const imgSrc = handleImages();

  return (
    <section className="w-full mb-[100px]" id="view-point">
      <div className="lgOnly:container">
        <div className="text-center">
          <h2 className="text-titleColor text-[76px] font-dancing text-center  leading-[60px] xl:leading-normal">
            View Point
          </h2>
          <h2 className="text-[36px] md:text-[54px] text-white font-montserrat font-medium text-center leading-[50px]">
            Discover Our Tourist
            <br />
            Viewpoint
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-center mt-[50px]">
          <div className="w-full xl:w-[40%] flex flex-col gap-2 pl-[100px]">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelected(index)}
                className={` ${
                  state === index ? "border-textBlue" : "border-transparent"
                } border-[6px] mr-0 xl:mr-[-50px] ml-[-100px] px-[30px] xl:px-[100px] py-2 z-[99] relative cursor-pointer`}
              >
                <div className="text-white gap-10 flex group">
                  <p className="text-[25px] font-semibold">2/07</p>
                  <div>
                    <h3 className="text-[17px] font-[600]">
                      Lorem ipsum dolor.
                    </h3>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="flex items-center gap-5  ">
                      <HiArrowLongRight className="text-[40px] group-hover:text-textBlue transition-all duration-300 ease-in-out" />
                      <button
                        type="button"
                        className="font-semibold group-hover:text-textBlue transition-all duration-300 ease-in-out"
                      >
                        View Route
                      </button>
                    </div>
                  </div>
                </div>

                {state === index && (
                  <p className="absolute top-[17px] right-0 text-[25px] font-semibold text-white flex  items-center gap-1 justify-center verticalText">
                    <BiSolidCalendar />
                    2/07
                  </p>
                )}
              </div>
            ))}
            <BookTour className="justify-center xl:justify-start mr-[100px] xl:mr-0 mt-[20px] mb-[30px]" />
          </div>
          <div className="w-full xl:w-[60%]">
            <Image
              src={imgSrc}
              alt="img"
              width={800}
              height={650}
              className={`h-[350px] xl:h-[650px] w-full object-cover ${
                isVisible ? "" : "fade-out"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewPoint;
