import React, { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { fadeIn } from "../../variants";

const FadeIn = ({
  direction = "up",
  delay = "0.5",
  duration = "0.5",
  children,
  className
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show").then().catch();
    }
  }, [isInView, mainControls]);

  return (
    <AnimatePresence>
      <motion.div
        initial={"hidden"}
        variants={fadeIn(direction, delay, duration)}
        animate={mainControls}
        ref={ref}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
