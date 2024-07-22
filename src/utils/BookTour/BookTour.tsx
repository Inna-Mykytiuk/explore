import React from "react";

interface BookProps {
  className: string;
}

const BookTour: React.FC<BookProps> = ({ className }) => {
  return (
    <div className={`flex ${className}`}>
      <button
        type="button"
        className="text-[33px] text-titleColor hover:text-white border-2 border-titleColor hover:border-white uppercase px-8 xl:px-16 py-1 font-bebas transition-all duration-300 ease-in-out "
      >
        Book Tour
      </button>
    </div>
  );
};

export default BookTour;
