import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div className={`h-[1080px] overflow-hidden`} id="home">
      <Navbar />
      <Header />
    </div>
  );
};

export default Main;
