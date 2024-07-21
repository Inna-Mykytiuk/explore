"use client";

import React, { useContext } from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import { MyContext } from "@/context/AppContext";

const Main = () => {
  const context = useContext(MyContext);

  if (!context) {
    return null;
  }

  const { activeSlideIndex } = context;

  const handleClass = (activeSlideIndex: number) => {
    switch (activeSlideIndex) {
      case 0:
        return "bgContainer1";
      case 1:
        return "bgContainer2";
      case 2:
        return "bgContainer3";
      default:
        return "bgContainer1";
    }
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <section className={`${classChange} h-[1080px] xl:h-screen`} id="home">
      <Navbar />
      <Header />
    </section>
  );
};

export default Main;
