import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { motion } from "framer-motion";
import Heading1 from "../heading/Heading1";
import FadeIn from "../animations/FadeIn";
import ButtonType1 from "../buttons/ButtonType1";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.1 * i,
      duration: 0.3,
    },
  }),
};
const FAQ = () => {
  const initialCount = 5;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const showMoreFAQs = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showLessFAQs = () => {
    setVisibleCount(initialCount);
  };

  const FAQ_ques_ans = [
    {
      ques: "Do you work with new startups as clients?",
      ans: "Yes, we gladly support startups and look forward to helping new businesses establish a strong digital foundation.",
    },
    {
      ques: "Do you work on our existing wireframe or design?",
      ans: "Yes, but we have to review your designs, if we can work on that or not, according to your needs.",
    },
    {
      ques: "How do you ensure the quality of your services?",
      ans: "We are a group of 6 young individuals having expertise in various different fields with more that 3 years of experience in this industry. Our process includes several internal quality checks, along with review meetings to ensure that the final output meets and exceeds your expectations.",
    },

    {
      ques: "How long does it take to complete a project?",
      ans: "The project timeline depends on the specific services you choose. We can discuss estimated timelines based on your unique requirements. You can also choose a normal or an express delivery of services.",
    },
    {
      ques: "Do you charge for additional revisions?",
      ans: "It will be completely free for upto 3 revisions.",
    },

    {
      ques: "Do you offer custom design solutions?",
      ans: "Yes, we provide fully customized design solutions to meet your specific needs.",
    },

    {
      ques: "I have an agency. Can I outsource work to you?",
      ans: "Yes, you can.",
    },

    {
      ques: "What role will we play in the process beyond providing content?",
      ans: "We encourage open communication throughout the process to ensure your vision is met. We’ll guide you on any specific needs or content that may enhance the project, but we handle all technical and creative aspects.",
    },

    {
      ques: "Is there a refund if the results don’t meet expectations?",
      ans: "Yes, if any service does not meet agreed-upon expectations, you may request a review, and payment for that specific service can be refunded upon justification.",
    },
    {
      ques: "Can we modify our selected package after the project begins?",
      ans: "Yes, you have the flexibility to customize your package during the project to better suit your evolving needs. This option might include extra charges depending upon the work already done.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="flex items-center justify-center flex-col gap-12" id="faqs">
      <FadeIn delay="0.4" duration="0.5">
        <Heading1 className={"text-center"}>
          Frequently Asked <span className="text-green-accent">Questions</span>
        </Heading1>
      </FadeIn>
      <div className="flex flex-col items-center justify-center select-none">
        {FAQ_ques_ans.slice(0, visibleCount).map((item, i) => (
          <motion.div
            className="py-8 border-b border-b-gray-accent/30 px-8 hover:bg-gray-accent/5 cursor-pointer duration-200 transition-colors w-full"
            key={i}
            onClick={() => toggle(i)}
            variants={fadeInVariants}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={i}
          >
            <div className="text-xl font-medium cursor-pointer flex items-center justify-between w-full ">
              <div>{item.ques}</div>
              <div className="text-green-accent">
                {selected === i ? <LuMinus /> : <GoPlus />}
              </div>
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                selected === i
                  ? "grid-rows-[1fr] opacity-100 py-2"
                  : "grid-rows-[0fr] opacity-0 py-0"
              }`}
            >
              <div className={`text-md text-gray-accent overflow-hidden`}>
                {item.ans}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <FadeIn delay="0.3" duration="0.5">
        {visibleCount < FAQ_ques_ans.length && (
          <ButtonType1 onClick={showMoreFAQs} secondary>
            Show More
          </ButtonType1>
        )}
        {visibleCount > initialCount && (
          <ButtonType1 onClick={showLessFAQs} secondary>
            Show Less
          </ButtonType1>
        )}
      </FadeIn>
    </div>
  );
};

export default FAQ;
