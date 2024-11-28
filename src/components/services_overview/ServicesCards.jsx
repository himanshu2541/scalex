import React from "react";
import FadeIn from "../animations/FadeIn";

const ServicesCards = ({ title, imgSrc }) => {
  return (
    <FadeIn
      delay="0.6"
      duration="0.6"
      className="h-48 w-48 bg-white border border-gray-accent/5 shadow-md rounded-md flex flex-col items-center justify-center gap-4 text-secondary p-4"
    >
      <img src={imgSrc} alt={""} className="h-20 " />
      <p className="text-center mx-auto">{title}</p>
    </FadeIn>
  );
};

export default ServicesCards;
