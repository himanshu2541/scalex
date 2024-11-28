import React from "react";
import ServicesCards from "./ServicesCards";
import services_content from "../services/services_content";

const ServicesOverView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-8">
      {services_content.map((item, i) => (
        <div key={i} className="inline-flex items-center justify-center">
          <ServicesCards title={item.title} imgSrc={item.img} />
        </div>
      ))}
    </div>
  );
};

export default ServicesOverView;
