import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import WorkPageTopBar from "../../components/work/WorkPageTopBar";

const videoData = [
  {
    title: "SBRC - Spotlight- Ms. Sruthi Mahalakshmi || IIT Kharagpur",
    description:
      "Branding and Relations Cell, IIT Kharagpur’s interview of the Spotlight series of Miss Sruthi Mahalakshmi.",
    thumbnail: "/work/video_editing/spotlight.jpg",
    videoId: "UkPls558yfY", // YouTube video ID
  },
  {
    title: "TFPS IIT KGP - Rewind",
    description: "Ideated, scripted, shot and edited a short film",
    thumbnail: "/work/video_editing/rewind.jpg",
    videoId: "0iGqS7aUc6I",
  },
];

const VideoContent = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleCardClick = (videoId) => {
    setActiveVideo(videoId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-4 pb-12">
      <WorkPageTopBar title="Video Editing" />
      {/* Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videoData.map((video, i) => (
          <div
            key={i}
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
