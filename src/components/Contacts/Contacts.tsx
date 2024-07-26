"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../ContactForm/ContactForm";

import branchImg from "../../../public/pictures/branch.png";

export default function Contacts() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="contacts"
      className="bgContainer4 z-[1] relative pt-[50px] pb-[50px] md:pb-[100px] xl:pb-[150px] bg-contactBg  bg-no-repeat bg-cover bg-center"
    >
      <div className="container ">
        <div className="text-center mb-[40px] md:mb-[80px]">
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
            Contacts
          </motion.h2>
          <motion.h3
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
            Get in touch
          </motion.h3>
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
            src={branchImg}
            alt="travel logo"
            width={485}
            height={400}
            className="hidden xl:block absolute bottom-[-50px] md:bottom-[20px] right-[-200px] md:right-[-150px] xl:right-[60px] object-cover object-center w-[485px] h-[400px] z-[-1]  opacity-75"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="600"
          />
        </div>
      </div>
    </section>
  );
}
