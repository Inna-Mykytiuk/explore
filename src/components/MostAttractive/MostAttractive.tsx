"use client";

import React, { useContext } from "react";

import img1 from "../../../public/set/indonesia/1.jpg";
import img2 from "../../../public/set/thai/1.jpg";
import img3 from "../../../public/set/nepal/1.jpg";

import img4 from "../../../public/set/indonesia/2.jpg";
import img5 from "../../../public/set/thai/2.jpg";
import img6 from "../../../public/set/nepal/2.jpg";

import img7 from "../../../public/set/indonesia/3.jpg";
import img8 from "../../../public/set/thai/3.jpg";
import img9 from "../../../public/set/nepal/3.jpg";

import img10 from "../../../public/set/indonesia/4.jpg";
import img11 from "../../../public/set/thai/4.jpg";
import img12 from "../../../public/set/nepal/4.jpg";

import img13 from "../../../public/set/indonesia/5.jpg";
import img14 from "../../../public/set/thai/5.jpg";
import img15 from "../../../public/set/nepal/5.jpg";

import bgLeft from "../../../public/images/indoBg1.jpg";
import bgRight from "../../../public/images/nepalBg1.jpg";

import { BsHexagonFill } from "react-icons/bs";
import "aos/dist/aos.css";
import { MyContext } from "@/context/AppContext";

const MostAttractive = () => {
  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { activeSlideIndex } = context;

  return (
    <section className="w-full" id="reason">
      <div className="container">
        <div>Most Attractive</div>
      </div>
    </section>
  );
};

export default MostAttractive;
