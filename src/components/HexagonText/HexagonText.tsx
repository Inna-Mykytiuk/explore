"use client";

import React, { useEffect } from "react";
import { BsHexagonFill } from "react-icons/bs";
import classNames from "classnames";

import AOS from "aos";
import "aos/dist/aos.css";

interface HexagonTextProps {
  alignment: "left" | "right";
  text: string;
  additionalClassName?: string;
}

const HexagonText: React.FC<HexagonTextProps> = ({
  alignment,
  text,
  additionalClassName,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={classNames("relative flex items-center", additionalClassName)}
    >
      <BsHexagonFill className="text-[30px] rotate-[90deg] text-textBlue" />
      <p
        className={`absolute w-[260px] md:w-[350px] ml-[-30px] sm:ml-0 ${
          alignment === "left"
            ? "left-[70px] text-left"
            : "right-[70px] text-right"
        } text-white`}
        data-aos={`${alignment === "left" ? "fade-left" : "fade-right"} `}
        data-aos-delay="800"
        data-aos-duration="800"
      >
        {text}
      </p>
    </div>
  );
};

export default HexagonText;
