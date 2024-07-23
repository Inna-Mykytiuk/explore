import React from "react";
import { Link } from "react-scroll";

interface BookProps {
  className: string;
}

const BookTour: React.FC<BookProps> = ({ className }) => {
  return (
    <div className={`flex ${className}`}>
      <Link
        to="contacts"
        smooth={true}
        spy={true}
        href="#"
        ignoreCancelEvents={true}
        className="text-[33px] text-titleColor hover:text-white border-2 border-titleColor hover:border-white uppercase px-8 xl:px-16 py-1 font-bebas transition-all duration-300 ease-in-out hover:shadow-[4px_4px_30px_0px_rgba(207,188,185,0.9)]"
      >
        Book Tour
      </Link>
    </div>
  );
};

export default BookTour;
