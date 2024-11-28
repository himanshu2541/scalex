import React from "react";
import Heading1 from "../heading/Heading1";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
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

const Work = () => {
  const slides = [
    { imgSrc: "/work/post_1.png" },
    { imgSrc: "/work/post_2.png" },
    { imgSrc: "/work/post_3.png" },
    { imgSrc: "/work/post_2.png" },
    { imgSrc: "/work/post_1.png" },
    { imgSrc: "/work/post_3.png" },
    { imgSrc: "/work/post_2.png" },
    { imgSrc: "/work/post_1.png" },
    { imgSrc: "/work/post_2.png" },
    { imgSrc: "/work/post_3.png" },
    { imgSrc: "/work/post_1.png" },
    { imgSrc: "/work/post_2.png" },
    { imgSrc: "/work/post_3.png" },
  ];

  return (
    <MaxWidthContainer className={"mt-24"}>
      <div
        className="flex items-center justify-center flex-col gap-10"
        id="work"
      >
        <div>
          <Heading1 className={""}>Work</Heading1>
        </div>
        <div className="w-full flex items-center justify-center ">
          <Swiper
            effect="coverflow"
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            spaceBetween={-40}
            slidesPerView={2}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() => console.log("slide change")}
            centeredSlides
            parallax={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            style={{
              "--swiper-navigation-size": "25px",
              "--swiper-theme-color": "rgba(var(--green-accent), 1)",
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {slides.map((slideContent, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <div
                    className={`${
                      isActive ? "opacity-100 " : "opacity-65"
                    } duration-300 select-none`}
                  >
                    <img
                      src={slideContent.imgSrc}
                      alt=""
                      className="rounded-xl object-cover object-center w-full h-auto"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default Work;
