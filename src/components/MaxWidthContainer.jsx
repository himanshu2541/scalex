import React from "react";

const MaxWidthContainer = ({ width = "1200px", children, className }) => {
  return <div style={{ maxWidth: width }} className={`mx-auto px-4 sm:px-8 ${className}`}>{children}</div>;
};

export default MaxWidthContainer;
