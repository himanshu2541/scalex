import React from "react";
import MaxWidthContainer from "../MaxWidthContainer";
import FadeIn from "../animations/FadeIn";
import services_content from "./services_content";
import PopUp from "../animations/PopUp";

const Services = () => {
  return (
    <div className={"mt-24 py-20 bg-[#f5f5f5]"} id="services">
    <MaxWidthContainer>
        <div className="flex items-center justify-center flex-col gap-10">
          <FadeIn className={"font-bold text-6xl"} delay="0.3" duration="0.4">
            Services
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 place-content-center">
            {services_content.map((content, i) => (
              <div
                key={i}
                className="grid grid-rows-7 w-96 border border-gray-accent/50 rounded-2xl p-8 bg-[#f0f0f0] shadow-sm
              "
              >
                <PopUp className="row-span-2">
                  <img src={content.img} alt={content.title} className="h-28" />
                </PopUp>

                <PopUp delay="0.4" duration="0.5" className={"row-span-1 mt-3"}>
                  <div className="font-bold text-xl">{content.title}</div>
                </PopUp>

                <div className="flex flex-col gap-6 row-span-4 -mt-2">
                  <FadeIn
                    delay="0.5"
                    duration="0.5"
                    className={"flex flex-col gap-4"}
                  >
                    {content.desc.map((item, i) => (
                      <div className="font-semibold" key={i}>
                        {item[0]}:{" "}
                        <span className="font-normal text-gray-accent/90 text-sm">
                          {item[1]}
                        </span>
                      </div>
                    ))}
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Services;
