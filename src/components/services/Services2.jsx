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
                className={`flex gap-8 flex-col md:flex-row ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                } justify-between border-b border-b-gray-accent/50 pb-6 sm:pb-8 md:pb-10 lg:pb-12 px-4 items-center`}
              >
                <PopUp className={"w-[80%] sm:w-[40%] md:w-[35%] lg:w-[30%]"}>
                  <img
                    src={content.img}
                    alt={" "}
                    className="rounded-full  object-cover object-center"
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
                    className={"flex flex-col gap-2"}
                  >
                    {content.desc.map((item, i) => (
                      <ul key={i} className="list-disc pl-4">
                        <li className=" text-black-accent text-md">{item}</li>
                      </ul>
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
