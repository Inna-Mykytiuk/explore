"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";

export default function Contacts() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="contacts"
      className="bgContainer4 z-[1] relative pt-[50px] pb-[50px] md:pb-[100px] xl:pb-[150px]"
    >
      <div className="container bg-contactBg  bg-no-repeat bg-cover bg-center">
        <div className="text-center mb-[40px] md:mb-[80px]">
          <h2 className="text-titleColor text-[76px] font-dancing text-center sm:text-start md:text-center leading-[60px] xl:leading-normal">
            Contact Us
          </h2>
          <h2 className="text-[36px] md:text-[54px] text-white font-montserrat font-medium text-center sm:text-start md:text-center leading-[50px]">
            Get in touch
          </h2>
        </div>
        <div
          className="flex flex-col md:flex-row w-full relative
        "
        >
          <div
            className="w-full xl:w-[50%]"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            <ContactForm />
          </div>
          <Image
            src="/pictures/branch.png"
            alt="travel logo"
            width={485}
            height={400}
            className="hidden xl:block absolute bottom-[-50px] md:bottom-[20px] right-[-200px] md:right-[-150px] xl:right-[130px] object-cover object-center w-[485px] h-[400px] z-[-1]  opacity-75"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="600"
          />
        </div>
      </div>
    </section>
  );
}
