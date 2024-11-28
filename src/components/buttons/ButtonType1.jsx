import React from "react";
import { motion } from "framer-motion";

const ButtonType1 = ({
  children,
  small = false,
  secondary = false,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      initial={{
        backgroundColor: `${
          secondary ? "rgba(var(--primary), 0)" : "rgba(var(--green-accent), 1)"
        }`,

        boxShadow: `rgba(0, 0, 0, 0.05) 0px 4px 10px -2px, rgba(0, 0, 0, 0.1) 0px 2px 2px -1px, ${
          secondary
            ? "rgba(var(--gray-accent), 0.1)"
            : "rgba(var(--green-accent), 0.3)"
        } 0px 0px 0px 1px`,
      }}
      whileHover={{
        backgroundColor: `${
          secondary
            ? "rgba(var(--primary),0.1)"
            : "rgba(var(--green-accent),0.9)"
        }`,
        boxShadow: `rgba(255, 255, 255, 0.05) 0px 4px 10px -2px, rgba(255, 255, 255, 0.1) 0px 2px 2px -1px, ${
          secondary
            ? "rgba(var(--gray-accent), 0.3)"
            : "rgba(var(--green-accent), 0.4)"
        } 0px 0px 0px 5px`,
      }}
      className={` backdrop-blur-[10px] ${
        secondary
          ? "text-secondary/80 border border-gray-accent/10"
          : "text-primary"
      } ${
        small ? "px-5 py-2.5 text-sm" : "px-6 py-2 text-md"
      } rounded-lg cursor-pointer font-medium ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default ButtonType1;
