"use client";

import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      url: "home",
    },
    {
      id: 2,
      title: "Reason",
      url: "reason",
    },
    {
      id: 3,
      title: "View",
      url: "view-point",
    },
    {
      id: 4,
      title: "Contacts",
      url: "contacts",
    },
  ];

  return (
    <nav className="w-full pt-[40px]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <a href="/" className="text-white font-bold text-[48px] font-dancing">
            Explore
          </a>

          <ul
            className="flex text-white text-sm sm:text-base font-bold uppercase gap-4 md:gap-10
            bg-lightBlue bg-opacity-[70%] py-3 px-4 sm:px-8 rounded-[40px]
            "
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  smooth={true}
                  spy={true}
                  href="#"
                  ignoreCancelEvents={true}
                  className=" relative inline-block
                    transform duration-75 ease-in-out cursor-pointer
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out
                    hover:after:w-full
                    "
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
