import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import WorkPageTopBar from "../../components/work/WorkPageTopBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const projects = [
  {
    id: 1,
    title: "TeamKART website",
    desc: "A dark themed website for a formula student organization.",
    imgSrc: "/work/web_development/teamkart_next/teamkart_next_1.jpg",
    images: [
      "/work/web_development/teamkart_next/teamkart_next_1.jpg",
      "/work/web_development/teamkart_next/teamkart_next_2.jpg",
      "/work/web_development/teamkart_next/teamkart_next_3.jpg",
      "/work/web_development/teamkart_next/teamkart_next_4.jpg",
      "/work/web_development/teamkart_next/teamkart_next_5.jpg",
      "/work/web_development/teamkart_next/teamkart_next_6.jpg",
    ],
    livePreview: "https://teamkart.vercel.app",
    github: "https://github.com/himanshu2541/teamkart-next",
  },
  {
    id: 2,
    title: "Techy Nexus",
    desc: "A model website for a product based company.",
    imgSrc: "/work/web_development/techy_nexus/techy_nexus_1.jpg",
    images: [
      "/work/web_development/techy_nexus/techy_nexus_1.jpg",
      "/work/web_development/techy_nexus/techy_nexus_2.jpg",
      "/work/web_development/techy_nexus/techy_nexus_3.jpg",
      "/work/web_development/techy_nexus/techy_nexus_4.jpg",
      "/work/web_development/techy_nexus/techy_nexus_5.jpg",
      "/work/web_development/techy_nexus/techy_nexus_6.jpg",
      "/work/web_development/techy_nexus/techy_nexus_7.jpg",
    ],
    livePreview: "https://techy-nexus.vercel.app/",
    github: "https://github.com/himanshu2541/techy-software-only-frontend",
  },
];

const WebDevelopment = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = async (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-4 pb-12">
      <WorkPageTopBar title="Web Development" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl border border-gray-300 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-transform"
            onClick={() => openModal(project)}
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600">{project.desc}</p>
            </div>
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-accent text-white px-4 py-1 rounded-lg shadow hover:shadow-md hover:bg-green-700 transition opacity-0 group-hover:opacity-100">
              View Project
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 relative w-11/12 md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition z-10"
              onClick={closeModal}
            >
              <RxCross2 size={24} />
            </button>
            {/* <img
              src={selectedProject.imgSrc}
              alt={selectedProject.title}
              className="w-full h-auto rounded-lg mb-4"
            /> */}
            <Swiper
              spaceBetween={10}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              className="rounded-lg mb-4 select-none"
              style={{
                "--swiper-navigation-size": "25px",
                "--swiper-theme-color": "rgba(var(--green-accent), 1)",
              }}
            >
              {selectedProject.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${selectedProject.title} image ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-gray-700">{selectedProject.desc}</p>
            <div className="mt-4 flex justify-between items-center">
              {selectedProject.livePreview && (
                <a
                  href={selectedProject.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-accent hover:underline"
                >
                  Live Preview
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-accent hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDevelopment;
