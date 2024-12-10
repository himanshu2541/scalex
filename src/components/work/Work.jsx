import React from "react";
import Heading1 from "../heading/Heading1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "./work.css";
import MaxWidthContainer from "../MaxWidthContainer";
import { useNavigate } from "react-router-dom";
import workLinks from "./workLinks";
import FadeIn from "../../components/animations/FadeIn";
import PopUp from "../animations/PopUp";

const Work = () => {
  const slides = [
    { imgSrc: "/work/post_1.jpg" },
    { imgSrc: "/work/post_2.jpg" },
    { imgSrc: "/work/post_3.jpg" },
    { imgSrc: "/work/post_4.jpg" },
    { imgSrc: "/work/post_5.jpg" },
    { imgSrc: "/work/post_6.jpg" },
    { imgSrc: "/work/post_7.jpg" },
    { imgSrc: "/work/post_8.jpg" },
  ];

  const navigate = useNavigate();

  return (
    <MaxWidthContainer className="mt-24">
      <div
        className="flex flex-col items-center justify-center gap-10"
        id="work"
      >
        <Heading1>Work</Heading1>

        {/* Swiper Section */}
        <div className="w-full flex items-center justify-center max-w-[1000px]">
          <Swiper
            effect="coverflow"
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            spaceBetween={-40}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            centeredSlides
            loop
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              624: { slidesPerView: 2, slidesPerGroup: 1 },
            }}
            style={{
              "--swiper-navigation-size": "25px",
              "--swiper-theme-color": "rgba(var(--green-accent), 1)",
            }}
            className="flex items-center justify-center"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-lg md:rounded-xl relative overflow-hidden select-none">
                  <img
                    src={slide.imgSrc}
                    alt={`Slide ${i + 1}`}
                    className="object-cover object-center w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <FadeIn delay="0.5" duration="0.5">
          <div className="text-center mt-24">
            <div className="text-green-accent text-2xl md:text-3xl font-bold">
              Explore Our Work
            </div>
          </div>
        </FadeIn>

        {/* Work Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {workLinks.map((obj, i) => (
            <React.Fragment key={i}>
              <PopUp delay="0.5" duration="0.5">
                <div
                  className="group hover-card bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-black-accent/20 rounded-lg cursor-pointer overflow-hidden hover:scale-105"
                  onClick={() => navigate(obj.link)}
                >
                  {/* Image Section */}
                  <div className="h-52 overflow-hidden relative transform transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={obj.img}
                      alt={obj.title}
                      className="w-full h-full object-cover "
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl font-semibold">Visit</p>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    <div className="font-semibold text-lg text-black-accent">
                      {obj.title}
                    </div>
                    <div className="text-black-accent/80 text-sm mt-2">
                      {obj.desc}
                    </div>
                  </div>
                </div>
              </PopUp>
            </React.Fragment>
          ))}
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default Work;
