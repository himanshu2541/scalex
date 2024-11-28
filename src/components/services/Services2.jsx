import React from "react";
import MaxWidthContainer from "../MaxWidthContainer";
import FadeIn from "../animations/FadeIn";
import services_content from "./services_content";
import PopUp from "../animations/PopUp";
import Heading1 from "../heading/Heading1";

const Services2 = () => {
  return (
    <div id="services">
      <MaxWidthContainer className={"mt-24"}>
        <div className="flex items-center justify-center flex-col gap-4 sm:gap-6 md:gap-8">
          <FadeIn delay="0.3" duration="0.4">
            <Heading1>Services</Heading1>
          </FadeIn>

          <div className="flex gap-12 flex-col w-full mt-12 sm:mt-16 ">
            {services_content.map((content, i) => (
              <div
                key={i}
                className={`flex gap-8 md:gap-12 flex-col md:flex-row ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                } justify-between border-b border-b-gray-accent/50 pb-6 sm:pb-8 md:pb-10 lg:pb-12 px-4`}
              >
                <PopUp className={"max-w-none  md:max-w-[50%]"}>
                  <img
                    src={content.img}
                    alt={" "}
                    className="w-full h-full object-cover object-center"
                  />
                </PopUp>

                <div className="flex flex-col gap-6">
                <PopUp
                    delay="0.4"
                    duration="0.5"
                    className={"row-span-1 mt-3"}
                  >
                    <div className="font-bold text-2xl sm:text-3xl ">
                      {content.title}
                    </div>
                  </PopUp>

                  <FadeIn
                    delay="0.5"
                    duration="0.5"
                    className={"flex flex-col gap-4"}
                  >
                    {content.desc.map((item, i) => (
                      <div key={i}>
                        <span className="font-semibold text-md ">
                          {item[0]}:{" "}
                        </span>
                        <span className="text-gray-accent/90 text-md">
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

export default Services2;
