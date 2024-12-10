import React, { useEffect, useState } from "react";
import WorkPageTopBar from "../../components/work/WorkPageTopBar";

const contentWritingWorks = [
  {
    id: 1,
    title: "Pitstop - Vol 001",
    desc: "A comprehensive guide to enhance your writing skills with tips and techniques.",
    imgSrc: "/work/content_writing/pitstop-01.jpg",
    link: "https://online.fliphtml5.com/uoqxo/gfid/",
    flipbook: true,
  },
  {
    id: 2,
    title: "Pitstop - Vol 002",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/content_writing/pitstop-02.jpg",
    link: "https://online.fliphtml5.com/uoqxo/bneq/",
    flipbook: true,
  },
  {
    id: 3,
    title: "Pitstop - Vol 003",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/content_writing/pitstop-03.jpg",
    link: "https://online.fliphtml5.com/uoqxo/fivz/",
    flipbook: true,
  },
  {
    id: 4,
    title: "Pitstop - Vol 004",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/content_writing/pitstop-04.jpg",
    link: "https://online.fliphtml5.com/uoqxo/jxgz/",
    flipbook: true,
  },
  {
    id: 5,
    title: "Pitstop - Vol 005",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/content_writing/pitstop-05.jpg",
    link: "https://online.fliphtml5.com/xcozf/qgdd/",
    flipbook: true,
  },
  {
    id: 6,
    title: "Pitstop - Vol 006",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/content_writing/pitstop-06.jpg",
    link: "https://online.fliphtml5.com/uoqxo/yyvc/",
    flipbook: true,
  },
  {
    id: 7,
    title: "Pitstop - Vol 007",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/content_writing/pitstop-07.jpg",
    link: "https://online.fliphtml5.com/uoqxo/ywjz/",
    flipbook: true,
  },
  {
    id: 9,
    title: "Pitstop - Vol 009",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/content_writing/pitstop-09.jpg",
    link: "https://online.fliphtml5.com/nscau/meuy/",
    flipbook: true,
  },
  {
    id: 10,
    title: "Pitstop - Vol 010",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/content_writing/pitstop-10.jpg",
    link: "https://online.fliphtml5.com/nscau/wlbb/",
    flipbook: true,
  },
  {
    id: 11,
    title: "Medium article link",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "https://medium.com/example",
    flipbook: false,
  },
  {
    id: 11,
    title: "Wordpress article link",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "https://wordpress.com/example",
    flipbook: false,
  },
  // Add more items as needed
];

const ContentWriting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFlipbook, setCurrentFlipbook] = useState("");

  const handleCardClick = (work) => {
    if (work.flipbook) {
      // Open modal for flipbooks
      setCurrentFlipbook(work.link);
      setIsModalOpen(true);
    } else {
      // Redirect for external links
      window.open(work.link, "_blank", "noopener noreferrer");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentFlipbook("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-4 pb-16">
      <WorkPageTopBar title="Content Writing" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contentWritingWorks.map((work, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200 hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(work)}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={work.imgSrc}
                alt={work.title}
                className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {work.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{work.desc}</p>
            </div>

            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-accent text-white px-4 py-1 rounded-lg shadow hover:shadow-md hover:bg-green-700 transition opacity-0 group-hover:opacity-100">
              {work.flipbook ? "View Flipbook" : "Read Article"}
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Flipbooks */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full rounded-lg overflow-hidden relative max-h-[98vh]"
            style={{
              width: "100%",
              maxWidth: "850px", // Letter size width in pixels
              aspectRatio: "8.5 / 11", // Maintain letter size aspect ratio
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on iframe click
          >
            <button
              className="absolute top-4 right-4 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 z-10"
              onClick={closeModal}
            >
              ✕
            </button>
            <iframe
              src={currentFlipbook}
              style={{
                position: "absolute",
                border: "none",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
              }}
              seamless="seamless"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentWriting;
