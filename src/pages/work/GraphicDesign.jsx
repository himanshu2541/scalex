import React, { useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import { Link } from "react-router-dom"; // Add react-router-dom for navigation
import { RxCross2 } from "react-icons/rx";

import WorkTopBarLink from "../../components/work/WorkTopBarLink";

const works = [
  {
    id: 1,
    title: "Logo Design for ABC",
    desc: "A minimalistic logo designed for ABC.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 2,
    title: "Social Media Banner",
    desc: "A vibrant banner for social media campaigns.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 3,
    title: "Brochure for XYZ",
    desc: "Professional brochure designed for XYZ.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 4,
    title: "Business Card for Acme Corp",
    desc: "A sleek and modern business card design for Acme Corp.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 5,
    title: "Website Layout for ABC",
    desc: "A responsive and elegant website layout design.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 6,
    title: "Magazine Cover for Fashion Weekly",
    desc: "A stylish magazine cover design for Fashion Weekly.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 7,
    title: "Product Packaging for XYZ",
    desc: "Creative product packaging design for XYZ.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 8,
    title: "Flyer for Event Promotion",
    desc: "A vibrant flyer design for an upcoming event.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 9,
    title: "Ebook Cover for Author X",
    desc: "An eye-catching ebook cover design for Author X.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 10,
    title: "Email Template Design",
    desc: "A clean and professional email template design.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 11,
    title: "Poster for Music Concert",
    desc: "A bold poster design for a music concert.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 12,
    title: "Infographic for Data Presentation",
    desc: "An engaging infographic design to present data.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 13,
    title: "Banner for E-commerce Sale",
    desc: "A catchy banner design for an e-commerce sale.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 14,
    title: "T-shirt Design for Brand Y",
    desc: "A trendy t-shirt design for Brand Y's merchandise.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 15,
    title: "Poster for Environmental Campaign",
    desc: "A thought-provoking poster design for an environmental campaign.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
];

const GraphicDesign = () => {
  const [selectedWork, setSelectedWork] = useState(null);
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

  const openModal = async (work) => {
    setSelectedWork(work);

    // Fetch image as a Blob
    try {
      const response = await fetch(work.imgSrc);
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
    setSelectedWork(null);
    setModalImage(null);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Graphic Design
      </h1>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="inline-block text-sm text-black-accent hover:underline"
      >
        Back to Home
      </Link>

      {/* Links to Content Writing and Web Development */}
      <div className="text-center mb-12">
        <WorkTopBarLink />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="border border-gray-200 p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => openModal(work)}
          >
            <img
              src={work.imgSrc}
              alt={work.title}
              className="w-full h-40 object-cover rounded-md"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold mt-4">{work.title}</h2>
            <p className="text-gray-600">{work.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <RxCross2 />
            </button>
            <img
              src={modalImage}
              alt={selectedWork.title}
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedWork.title}</h2>
            <p className="text-gray-700 mt-2">{selectedWork.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesign;
