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

const Work = () => {
  const slides = [
    { imgSrc: "/work/post_1.png" },
    { imgSrc: "/work/post_2.png" },
    { imgSrc: "/work/post_3.png" },
    { imgSrc: "/work/post_1.png" },
    { imgSrc: "/work/post_2.png" },
    { imgSrc: "/work/post_3.png" },
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
        <div className="w-full flex items-center justify-center">
          <Swiper
            effect="coverflow"
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            spaceBetween={-40}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            centeredSlides
            loop
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
            style={{
              "--swiper-navigation-size": "25px",
              "--swiper-theme-color": "rgba(var(--green-accent), 1)",
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <img
                  src={slide.imgSrc}
                  alt={`Slide ${i + 1}`}
                  className="rounded-xl object-cover object-center w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="text-black-accent/80 text-xl mt-24 border border-black-accent/30 px-8 py-4 rounded-md
        "
        >
          Explore Our Work
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {workLinks.map((obj, i) => (
            <div
              key={i}
              className="hover-card border border-black-accent/30 p-4 rounded-md cursor-pointer hover:bg-slate-100 transition duration-200"
              onClick={() => navigate(obj.link)}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={obj.img}
                  alt={obj.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <div className="font-semibold text-lg">{obj.title}</div>
                <div className="text-black-accent/80">{obj.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default Work;
