"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="bgContainer4 z-[1] relative mt-[20px] md:mt-[40px] pt-[50px] pb-[50px] md:pb-[100px] xl:pb-[150px]"
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
        <div className="flex flex-col md:flex-row w-full relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full xl:w-[50%]"
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* <Image
              src="/images/boat/yacht2.png"
              alt="travel logo"
              width={350}
              height={303}
              className="absolute bottom-[-50px] md:bottom-[-75px] right-[-200px] md:right-[-240px] xl:right-[130px] object-cover object-center w-[400px] h-[750px] z-[-1] xl:z-[1]"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
