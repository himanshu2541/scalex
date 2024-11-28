import React from "react";
import Heading1 from "../heading/Heading1";

const About = () => {
  const member_details = [
    { name: "Aniket Thakare", designation: "Co-founder", img: "/avatar.jpg" },
    { name: "Himanshu Singh", designation: "Co-founder", img: "/avatar.jpg" },
    { name: "Vaibhav K", designation: "Co-founder", img: "/avatar.jpg" },
  ];
  return (
    <div
      id="about"
      className="flex flex-col gap-16 items-center justify-center"
    >
      <Heading1>Our Team</Heading1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {member_details.map((member, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 items-center justify-center p-8"
          >
            <div className="rounded-full overflow-clip">
              <img
                src={member.img}
                alt=""
                className="h-60 hover:scale-105  transition duration-300"
                draggable={false}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xl font-bold">{member.name}</div>
              <div>{member.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
