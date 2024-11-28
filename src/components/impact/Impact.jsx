import FadeIn from "../animations/FadeIn";
import Heading1 from "../heading/Heading1";
import Slider from "../slider/Slider";
import CountUp from "react-countup";
const Impact = () => {
  const cards = [
    { number: 10000, start: 9500, desc: "Instagram views" },
    { number: 200, start: 100, desc: "Graphics Created" },
    { number: 100, start: 50, desc: "Videos Edited" },
    { number: 70, start: 35, desc: "Article Written" },
    { number: 15, start: 10, desc: "Magazines Published" },
  ];

  return (
    <div
      className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10"
      id="impact"
    >
      <FadeIn delay="0.6" duration="0.5">
        <Heading1>Impact</Heading1>
      </FadeIn>
      <Slider
        config={{
          slidesToShow: 4,
          spacing: 1,
        }}
        responsiveConfig={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        data={cards}
        renderItem={(item, index) => (
          // return an item of your choosing
          <div
            key={index}
            className="w-64 h-32 sm:h-40 md:h-42 flex items-center justify-center flex-col gap-3"
          >
            <div className="text-3xl md:text-4xl font-bold">
              <CountUp
                start={item.start}
                end={item.number}
                suffix=" +"
                enableScrollSpy
                scrollSpyDelay={500}
                scrollSpyOnce
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <div className="text-xl ">{item.desc}</div>
          </div>
        )}
      />
    </div>
  );
};

export default Impact;
