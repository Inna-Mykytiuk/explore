import React from "react";
import { BsHexagonFill } from "react-icons/bs";
import classNames from "classnames";

interface HexagonTextProps {
  alignment: "left" | "right";
  text: string;
  additionalClassName?: string;
}

const HexagonText: React.FC<HexagonTextProps> = ({
  alignment,
  text,
  additionalClassName,
}) => {
  return (
    <div
      className={classNames("relative flex items-center", additionalClassName)}
    >
      <BsHexagonFill className="text-[30px] rotate-[90deg] text-textBlue" />
      <p
        className={`absolute w-[250px] md:w-[350px] ml-[-30px] sm:ml-0 ${
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
