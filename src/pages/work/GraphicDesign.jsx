import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import WorkPageTopBar from "../../components/work/WorkPageTopBar";

const works = [
  {
    id: 1,
    title: "Know Your Subsystem Design for TeamKART",
    desc: "An attractive post for Instagram handle, allowing people to know more about TeamKART.",
    imgSrc: "/work/graphic_design/graphic_design_1.jpg",
  },
  {
    id: 2,
    title: "Happy Diwali Post",
    desc: "A vibrant Diwali post for TeamKART's social media handle.",
    imgSrc: "/work/graphic_design/graphic_design_2.jpg",
  },
  {
    id: 3,
    title: "Sustainability Drive",
    desc: 'Wonderful post for the amazing client "RenewHeat".',
    imgSrc: "/work/graphic_design/graphic_design_3.jpg",
  },
  {
    id: 4,
    title: "Sponsorship Card",
    desc: "A sleek and modern sponsor card design for TeamKART.",
    imgSrc: "/work/graphic_design/graphic_design_4.jpg",
  },
  {
    id: 5,
    title: "Pitstop Magazine Cover - Volume 008",
    desc: "A beautiful and creative magazine cover design.",
    imgSrc: "/work/graphic_design/graphic_design_5.jpg",
  },
  {
    id: 6,
    title: "Pitstop Magazine Cover - Volume 010",
    desc: "A stylish magazine cover design for Pitstop Monthly.",
    imgSrc: "/work/graphic_design/graphic_design_6.jpg",
  },
  {
    id: 7,
    title: "Pitstop Magazine Cover - Volume 002",
    desc: "Creative magazine cover design for TeamKART.",
    imgSrc: "/work/graphic_design/graphic_design_7.jpg",
  },
];

const GraphicDesign = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-4 pb-16">
      <WorkPageTopBar title="Graphic Design" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <div
            key={work.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer group hover:scale-105 "
            onClick={() => openModal(work)}
          >
            <div className="relative">
              <img
                src={work.imgSrc}
                alt={work.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-accent">
                {work.title}
              </h2>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                {work.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={closeModal}
            >
              <RxCross2 />
            </button>
            <img
              src={selectedWork.imgSrc}
              alt={selectedWork.title}
              className="w-auto h-full max-h-[80vh] rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-6">
              {selectedWork.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesign;
