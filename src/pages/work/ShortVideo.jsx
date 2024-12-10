import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import WorkPageTopBar from "../../components/work/WorkPageTopBar";

const videoData = [
  {
    title: "Teamkart - Jig Assembly",
    caption: "Jig assembly video of teamkart motorsports.",
    videoCode: "C4xniJ8RVP1",
    imgSrc: "/work/short_videos/teamkart_jig_assembly.jpg",
    type: "instagram",
  },
  {
    title: "Teamkart - One love for cars we built",
    caption: "One Love video of teamkart motorsports.",
    videoCode: "C6ZEnQtPOjs",
    imgSrc: "/work/short_videos/teamkart_one_love.jpg",
    type: "instagram",
  },
  {
    title: "Teamkart - Logo Redesigning",
    caption: "Logo redesigning video for teamkart",
    videoCode: "C2DPjbgsETz",
    imgSrc: "/work/short_videos/teamkart_logo_redesigning.jpg",
    type: "instagram",
  },
  {
    title: "Teamkart - Selection Opening",
    caption: "Selection Opening  video for teamkart",
    videoCode: "CySe8KcOf1b",
    imgSrc: "/work/short_videos/teamkart_selection_opening.jpg",
    type: "instagram",
  },
  {
    title: "Client - Must Visit Thrift Stores In Bangalore Part-1",
    caption: "Promotional video for a client in Bangalore.",
    videoCode: "2u9vJGS5_6g",
    imgSrc: "/work/short_videos/client_thrift_store_part_I.jpg",
    type: "youtube",
  },
  {
    title: "Client - Must Visit Thrift Stores In Bangalore Part-2",
    caption: "Promotional video for a client in Bangalore.",
    videoCode: "yjMIZjJeAwA",
    imgSrc: "/work/short_videos/client_thrift_store_part_II.jpg",
    type: "youtube",
  },
  {
    title: "Client - Thrift Stores In Bangalore Part-3",
    caption: "Promotional video for a client in Bangalore.",
    videoCode: "muWnjRLW4hE",
    imgSrc: "/work/short_videos/client_thrift_store_part_III.jpg",
    type: "youtube",
  },
];

const ShortVideo = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (video) => {
    setActiveVideo(video);
  };

  const handleCloseModal = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-4 pb-12">
      <WorkPageTopBar title="Short Videos" />

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videoData.map((video, i) => (
          <div
            key={i}
            className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            onClick={() => handleVideoClick(video)}
          >
            {/* Video Thumbnail */}
            <img
              src={video.imgSrc}
              alt={video.caption}
              className="w-full h-[400px] object-cover"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Play</p>
            </div>
            {/* Video Caption */}
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">
                {video.title}
              </p>
              <p className="text-sm text-gray-600 mt-2">{video.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative w-full p-4 sm:p-12 md:p-16 lg:p-24 h-full max-w-2xl">
            {activeVideo.type === "instagram" ? (
              <iframe
                src={`https://www.instagram.com/reel/${activeVideo.videoCode}/embed`}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                allowFullScreen
                title="Instagram Reel"
                className="w-full h-full"
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoCode}`}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                allowFullScreen
                title="YouTube Video"
                className="w-full h-full"
              />
            )}
            <button
              className="absolute top-4 right-4 bg-red-600 text-white p-4 rounded-full"
              onClick={handleCloseModal}
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortVideo;
