import React from "react";
import StickyNote from "./StickyNote";
import Heading1 from "../heading/Heading1";

const Process = () => {
  const processData = [
    {
      title: "Discover",
      desc: [
        "Conduct in-depth consultations through meetings.",
        "Understand your brand, values, needs, and goals.",
      ],
    },
    {
      title: "Select a Plan",
      desc: [
        "Help you choose the most suitable plan based on your business needs.",
        "Options include social media management, branding, or e-commerce services.",
      ],
    },
    {
      title: "Behind the Scene",
      desc: [
        "A team of 6 experts specializing in graphics, website design, and more.",
        "Analyze social media trends and audience behaviour.",
        "Implement A/B testing and other techniques to improve digital performance.",
      ],
    },
    {
      title: "Review & Refine",
      desc: [
        "Monitor and refine approach regularly.",
        "Conduct periodic review meetings.",
        "Ensure final product delivery meets expectations.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-12" id="process">
      <Heading1>Process</Heading1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {processData.map((data, i) => (
          <StickyNote key={i} title={data.title} desc={data.desc} />
        ))}
      </div>
    </div>
  );
};

export default Process;
