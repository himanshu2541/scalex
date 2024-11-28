import React from "react";

const ButtonType2 = ({ children, small = false, onClick }) => {
  return (
    <button
      className={` backdrop-blur-[10px] ${
        small ? "px-3 py-2 text-sm" : "px-6 py-2 text-md"
      } rounded-lg cursor-pointer bg-white/0 hover:bg-black/5 duration-300 transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonType2;
