import React from "react";

const Heading1 = ({ children, className }) => {
  return <div className={`text-5xl md:text-6xl font-bold ${className}`}>{children}</div>;
};

export default Heading1;
