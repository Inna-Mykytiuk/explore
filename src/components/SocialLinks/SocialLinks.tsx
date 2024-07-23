import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const iconComponents = {
  FaFacebookF,
  AiFillInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
  FaTelegramPlane,
};

export type SocialLink = {
  href: string;
  ariaLabel: string;
  icon: keyof typeof iconComponents;
  hoverColor: string;
};

interface SocialLinksProps {
  socialLinks: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  return (
    <ul className="text-white grid grid-cols-3 gap-4">
      {socialLinks.map((link, index) => {
        const IconComponent = iconComponents[link.icon];

        let baseColor = "text-dark";
        let hoverColor = "group-hover:text-gray-500";

        if (link.ariaLabel === "Facebook") {
          hoverColor = "group-hover:text-mainBlue";
        } else if (link.ariaLabel === "Instagram") {
          hoverColor = "group-hover:text-pink-600";
        } else if (link.ariaLabel === "LinkedIn") {
          hoverColor = "group-hover:text-blue-500";
        } else if (link.ariaLabel === "Twitter") {
          hoverColor = "group-hover:text-blue-400";
        } else if (link.ariaLabel === "Github") {
          hoverColor = "group-hover:text-gray-500";
        } else if (link.ariaLabel === "Telegram") {
          hoverColor = "group-hover:text-blue-500";
        } else {
          hoverColor = "group-hover:text-gray-500";
        }

        return (
          <li
            key={index}
            className="group flex items-center justify-center cursor-pointer transition duration-300 ease-out w-full h-full"
          >
            <a
              href={link.href}
              aria-label={link.ariaLabel}
              className={`flex items-center justify-center ${baseColor} h-[35px] w-[35px] bg-white p-1 rounded-full`}
            >
              <IconComponent
                className={`h-[25px] w-[25px] ${hoverColor} transition duration-300 ease-out`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
