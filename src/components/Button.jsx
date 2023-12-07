import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants5 } from "./Animation";
const Button = ({
  label,
  iconURL,
  borderColor,
  backgroundColor,
  textColor,
  fullWidth,
}) => {
  return (
    <motion.button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border
    ${
      backgroundColor
        ? `${borderColor} ${backgroundColor} ${textColor}`
        : ` bg-coral-red  border-coral-red text-white`
    }  rounded-full ${fullWidth && `w-full`}`}
      variants={fadeInAnimationVariants5}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </motion.button>
  );
};

export default Button;
