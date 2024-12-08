import React, { useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import WorkTopBarLink from "../../components/work/WorkTopBarLink";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my work.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    livePreview: "https://myportfolio.com",
    github: "https://github.com/myusername/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    desc: "An e-commerce platform built with React and Node.js.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    livePreview: "https://myecommerce.com",
    github: "https://github.com/myusername/ecommerce",
  },
  {
    id: 3,
    title: "Blog Website",
    desc: "A modern blog website with a content management system.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    livePreview: "",
    github: "https://github.com/myusername/blog",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    desc: "A responsive admin dashboard built with React.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    livePreview: "https://mydashboard.com",
    github: "https://github.com/myusername/admin-dashboard",
  },
  // Add more projects as needed
];

const WebDevelopment = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  // Scroll the window to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resizeImage = (fileBlob, callback) => {
    Resizer.imageFileResizer(
      fileBlob, // Path to the image as a Blob
      800, // New width
      600, // New height
      "JPEG", // Output format
      90, // Quality percentage
      0, // Rotation
      (resizedImage) => callback(resizedImage), // Callback with resized image
      "base64" // Output type
    );
  };

  const openModal = async (project) => {
    setSelectedProject(project);

    // Fetch image as a Blob
    try {
      const response = await fetch(project.imgSrc);
      const blob = await response.blob();

      // Resize the image after fetching it as a Blob
      resizeImage(blob, (resizedImage) => {
        setModalImage(resizedImage); // Set resized image for modal
      });
    } catch (error) {
      console.error("Error fetching or resizing image:", error);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalImage(null);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Web Development
      </h1>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="inline-block text-sm text-black-accent hover:underline"
      >
        Back to Home
      </Link>

      {/* Links to Graphic Design and Content Writing */}
      <div className="text-center mb-12">
        <WorkTopBarLink />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all transform"
            onClick={() => openModal(project)} // Open modal on click
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md transition-transform duration-500"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {project.title}
            </h2>
            <p className="text-gray-600 mt-2">{project.desc}</p>

            {/* Live Preview and GitHub Links */}
            <div className="mt-4 flex justify-between items-center">
              {project.livePreview && (
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-accent hover:underline"
                >
                  Live Preview
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-accent hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 relative w-3/4 md:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal} // Close modal on click
            >
              <RxCross2 />
            </button>
            <img
              src={modalImage}
              alt={selectedProject.title}
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedProject.title}</h2>
            <p className="text-gray-700 mt-2">{selectedProject.desc}</p>
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
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-accent hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDevelopment;
