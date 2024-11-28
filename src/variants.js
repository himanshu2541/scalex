export const fadeIn = (direction, delay, duration) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },
  };
};

export const popUp = (delay, duration, scale) => {
  return {
    hidden: {
      scale: scale,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },
  };
};

export const unblur = (delay, duration) => {
  return {
    hidden: { left: 0 },
    visible: {
      left: "100%",
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
};
