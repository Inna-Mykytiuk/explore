import React from "react";
import { BsHexagonFill } from "react-icons/bs";

interface HexagonTextProps {
  alignment: "left" | "right";
  text: string;
}

const HexagonText: React.FC<HexagonTextProps> = ({ alignment, text }) => {
  return (
    <div className="relative flex items-center">
      <BsHexagonFill className="text-[30px] rotate-[90deg] text-textBlue" />
      <p
        className={`absolute w-[400px] ${
          alignment === "left"
            ? "left-[70px] text-left"
            : "right-[70px] text-right"
        } text-white`}
      >
        {text}
      </p>
    </div>
  );
};

export default HexagonText;
