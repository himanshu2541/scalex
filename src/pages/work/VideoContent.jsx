import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import WorkPageTopBar from "../../components/work/WorkPageTopBar";

const videoData = [
  {
    id: 1,
    title: "Amazing Sunset",
    description: "A breathtaking sunset by the beach.",
    thumbnail: "/work/graphic_design/sample_img.jpg",
    videoId: "dQw4w9WgXcQ", // YouTube video ID
  },
  {
    id: 2,
    title: "Breathtaking Nature",
    description: "Exploring the beauty of nature.",
    thumbnail: "/work/graphic_design/sample_img.jpg",
    videoId: "9bZkp7q19f0",
  },
  {
    id: 3,
    title: "City Lights",
    description: "A view of the city lights at night.",
    thumbnail: "/work/graphic_design/sample_img.jpg",
    videoId: "3JZ_D3ELwOQ",
  },
  // Add more videos as needed
];

const VideoContent = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleCardClick = (videoId) => {
    setActiveVideo(videoId);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-4 pb-12">
      <WorkPageTopBar title="Video Editing" />
      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            onClick={() => handleCardClick(video.videoId)}
          >
            {/* Thumbnail and Title */}
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
                <button className="bg-green-accent text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <FaPlay />
                </button>
              </div>
            </div>

            {/* Title and Description */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {video.title}
              </h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Player */}
      {activeVideo && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full p-8 sm:p-12 md:p-16 lg:p-24 h-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&controls=1`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Player"
            />
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-4 rounded-full"
              onClick={() => setActiveVideo(null)}
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoContent;
