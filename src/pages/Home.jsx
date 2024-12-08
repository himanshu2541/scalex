import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import MaxWidthContainer from "../components/MaxWidthContainer";
import WhyUs from "../components/whyus/WhyUs";
import FAQ from "../components/FAQ/FAQ";
import Impact from "../components/impact/Impact";
import Footer from "../components/footer/Footer";
import Services2 from "../components/services/Services2";
import Contact from "../components/contact/Contact";
import Work from "../components/work/Work";
import About from "../components/about/About";
import Process2 from "../components/process/Process2";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MaxWidthContainer>
        <Hero />
      </MaxWidthContainer>
      <div className="-mt-32 sm:-mt-28">
        <WhyUs />
      </div>
      {/* <Services /> */}
      <Services2 />
      <MaxWidthContainer className={"mt-16 md:mt-24 relative"}>
        <Impact />
      </MaxWidthContainer>
      <MaxWidthContainer className={"mt-24 relative"}>
        {/* <Process /> */}
        <Process2 />
      </MaxWidthContainer>
      <Work />
      <MaxWidthContainer className={"mt-24"}>
        <About />
      </MaxWidthContainer>
      <MaxWidthContainer className={"mt-24"}>
        <FAQ />
      </MaxWidthContainer>

      <MaxWidthContainer className={"mt-24"}>
        <Contact />
      </MaxWidthContainer>
      <div className="mb-24" />
      <Footer />
    </div>
  );
};

export default Home;
