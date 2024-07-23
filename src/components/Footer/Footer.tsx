import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import data from "@/data/footer.json";
import { SocialLink } from "../SocialLinks/SocialLinks";
import SocialLinks from "../SocialLinks/SocialLinks";

interface FooterData {
  title: string;
  description: string;
  subtitle: string;
  socialLinks: SocialLink[];
  contacts: string;
  location: string;
  email: string;
  phoneNumber: string;
  bottomText: string;
  bottomText1: string;
  bottomText2: string;
}

export default function Footer() {
  const {
    title,
    description,
    subtitle,
    socialLinks,
    contacts,
    location,
    phoneNumber,
    email,
    bottomText,
    bottomText1,
    bottomText2,
  } = data as FooterData;

  return (
    <section
      id="gallery"
      className="relative w-full bg-mainBcg pb-[30px] md:pb-[50px]
      after:hidden md:after:block after:absolute after:bg-mandalaLeft after:top-0 after:right-[-20px] after:h-full after:w-[650px] after:bg-cover after:opacity-5 after:z-[1]"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:pb-[50px] border-b-[1px] border-white mb-[30px] pb-[30px]">
          <div className="flex flex-col max-w-full xl:max-w-[40%]">
            <h3 className="text-white font-dancing text-2xl uppercase mb-[30px]">
              {title}
            </h3>
            <p className="text-white text-xs leading-7 font-normal mb-8 xl:mb-0">
              {description}
            </p>
          </div>
          <div className="flex flex-col justify-center xl:justify-end sm:flex-row gap-[50px] ml-0 xl:ml-auto">
            <div className="relative z-50">
              <h4 className="text-white text-center sm:text-start font-montserrat text-base font-normal uppercase mb-[30px]">
                {subtitle}
              </h4>
              <SocialLinks socialLinks={socialLinks} />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-white font-montserrat uppercase text-base font-normal mb-[30px]">
                {contacts}
              </h4>
              <p className="flex gap-1 text-white text-xs mb-4">
                <FaLocationDot />
                {location}
              </p>
              <p className="flex gap-1 text-white text-xs mb-4">
                <MdEmail />
                {email}
              </p>
              <p className="flex gap-1 text-white text-xs">
                <FaPhoneAlt />
                {phoneNumber}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <p className="text-white text-sm">{bottomText}</p>
          <p className="text-white text-sm flex items-center">
            {bottomText1}
            <IoIosHeart className="h-[20px] w-[20px] m-[5px] text-textBlue animate-scale" />
            {bottomText2}
          </p>
        </div>
      </div>
    </section>
  );
}
