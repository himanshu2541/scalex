import React from "react";
import Heading1 from "../heading/Heading1";
import FadeIn from "../animations/FadeIn";
import PopUp from "../animations/PopUp";

// Reusable Section Component
const Section = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-10 border border-gray-300 rounded-lg shadow-md relative z-10 w-96">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-sm sm:text-md flex flex-col gap-2">
        {description.map((d, i) => (
          <div key={i} className="flex gap-1">
            <span>-</span>
            <span>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Reusable Connection Component
const ConnectionLine = ({ fromX, fromY, toX, toY, color = "#ec4899" }) => {
  const path = `M ${fromX} ${fromY} C ${fromX} ${(fromY + toY) / 2}, ${toX} ${
    (fromY + toY) / 2
  }, ${toX} ${toY}`;
  return (
    <svg
      className="absolute top-0 left-0 pointer-events-none"
      width="100%"
      height="100%"
      style={{ overflow: "visible", zIndex: "0" }} // Ensure the SVG is behind the sections
    >
      <path d={path} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
};

// Connected Sections Layout Component
const Process2 = () => {
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

  const sectionSpacing = 300; // Adjust spacing as needed
  const sectionWidth = 384; // Tailwind's w-96 in pixels

  return (
    <div className="relative flex flex-col items-center gap-12" id="process">
      {/* Heading */}
      <Heading1>Process</Heading1>

      {/* Render Sections with Connection Lines */}
      <div className="relative flex flex-col items-center space-y-12 ">
        {processData.map((section, index) => (
          <PopUp className="relative" key={index}>
            {/* Section */}
            <Section title={section.title} description={section.desc} />

            {/* Debugging: Add a border around the section */}
            {/* <div className="absolute top-0 left-0 w-full h-full border border-blue-500"></div> */}

            {/* Connection Line */}
            {index < processData.length - 1 && (
              <ConnectionLine
                fromX={sectionWidth / 2} // Center X-coordinate of the section
                fromY={180} // Adjust to match the bottom of the section
                toX={sectionWidth / 2} // Center X-coordinate of the next section
                toY={400} // Adjust to match the top of the next section
                color="#1faf1f"
              />
            )}
          </PopUp>
        ))}
      </div>
    </div>
  );
};

export default Process2;
