"use client";

import React from "react";
import "./Navbar.css";
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
      title: "View Point",
      url: "view-point",
    },
    {
      id: 4,
      title: "Book Now",
      url: "booking",
    },
  ];

  return (
    <nav className="w-full pt-[40px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white">
            LOGO
          </a>

          <ul
            className="hidden md:flex text-white text-[17px] font-bold uppercase gap-10
            bg-lightBlue bg-opacity-[70%] py-3 px-8 rounded-[40px]
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
