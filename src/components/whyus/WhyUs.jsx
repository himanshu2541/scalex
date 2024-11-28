import React from "react";
import FadeIn from "../animations/FadeIn";
import why_us_content from "./whyus_content";
import MaxWidthContainer from "../MaxWidthContainer";
import PopUp from "../animations/PopUp";

const WhyUs = () => {
  return (
    <MaxWidthContainer>
      <div className="flex items-center justify-center flex-col">
        <FadeIn
          className={
            "font-medium px-4 py-3 border border-gray-accent/30 rounded-lg text-sm"
          }
          delay="0.6"
          duration="0.5"
        >
          Why Us?
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-12 lg:gap-8 mt-16">
          {why_us_content.map((item, i) => (
            <PopUp key={i} delay="0.5" duration="0.6" scale={0.95}>
              <div className="grid grid-rows-5 gap-6 max-w-60">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="h-24 row-span-2 mx-auto"
                />
                <FadeIn
                  delay="0.5"
                  duration="0.3"
                  className={"row-span-1 mx-auto"}
                >
                  <h3 className="font-bold text-lg whitespace-nowrap">
                    {item.title}
                  </h3>
                </FadeIn>
                <FadeIn delay="0.5" duration="0.4" className={"row-span-2"}>
                  <p className="text-center -mt-4">{item.desc}</p>
                </FadeIn>
              </div>
            </PopUp>
          ))}
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default WhyUs;
