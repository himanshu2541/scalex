import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { unblur } from "../../variants";
import FadeIn from "./FadeIn";

const UnBlur = ({ children, delay = "0.3", duration = "0.5", className }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible").catch();
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`relative overflow-hidden`}>
      <FadeIn delay={delay} duration={duration} className={className}>
        {children}
      </FadeIn>
      <motion.div
        variants={unblur(delay, duration)}
        initial={"hidden"}
        animate={mainControls}
        className="absolute inset-0 z-20"
        style={{ backdropFilter: "blur(5px)" }}
      />
    </div>
  );
};

export default UnBlur;
