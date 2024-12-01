import React from "react";
import MaxWidthContainer from "../MaxWidthContainer";
import ButtonType1 from "../buttons/ButtonType1";
import FadeIn from "../animations/FadeIn";
import PopUp from "../animations/PopUp";
import { Link as InPageLink } from "react-scroll";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center -mt-24 justify-center gap-6 select-none">
      <PopUp scale={0.8} delay="0.5" duration="0.3">
        10+ Business Scaled
      </PopUp>
      <FadeIn
        delay="0.5"
        duration="0.5"
        className="text-center leading-[4rem] md:leading-[4.5rem] lg:leading-[5rem] text-5xl  md:text-6xl lg:text-7xl font-semibold"
      >
        Build, <em className="font-medium text-green-accent">engage</em> <br />{" "}
        expand.
      </FadeIn>
      <MaxWidthContainer width="700px">
        <FadeIn
          delay="0.7"
          duration="0.5"
          className="text-gray-accent text-md sm:text-lg lg:text-xl text-center"
        >
          We assist businesses in scaling their brand through innovative
          strategies tailored to their unique needs and goals.
        </FadeIn>
      </MaxWidthContainer>

      <PopUp
        scale={0.9}
        delay="0.8"
        duration="0.4"
        className="flex gap-4 flex-col sm:flex-row"
      >
        <InPageLink to="contact" offset={-150}>
          <ButtonType1>Get a Free Consultation</ButtonType1>
        </InPageLink>
        <ButtonType1 secondary>Learn More</ButtonType1>
      </PopUp>
    </div>
  );
};

export default Hero;
