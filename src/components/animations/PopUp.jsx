import React, { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { popUp } from "../../variants";

const PopUp = ({
  delay = "0.3",
  duration = "0.4",
  scale = 0.8,
  children,
  className,
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
        variants={popUp(delay, duration, scale)}
        animate={mainControls}
        ref={ref}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUp;
