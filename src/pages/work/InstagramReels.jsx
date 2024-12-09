import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import WorkPageTopBar from "../../components/work/WorkPageTopBar";

const instagramReels = [
  {
    id: 1,
    caption: "Amazing sunset in the city!",
    reelLink: "Cr4M6glI-DP",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 2,
    caption: "Behind the scenes of my day!",
    reelLink: "CoVE_EQrOJC",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
  {
    id: 3,
    caption: "Exploring the nature trails!",
    reelLink: "C2DPjbgsETz",
    imgSrc: "/work/graphic_design/sample_img.jpg",
  },
];

const InstagramReels = () => {
  const [activeReel, setActiveReel] = useState(null);

  const handleReelClick = (reelLink) => {
    setActiveReel(reelLink);
  };

  const handleCloseModal = () => {
    setActiveReel(null);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-16 px-4 pb-12">
      <WorkPageTopBar title="Instagram Reels" />

      {/* Reel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {instagramReels.map((reel) => (
          <div
            key={reel.id}
            className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            onClick={() => handleReelClick(reel.reelLink)}
          >
            {/* Reel Thumbnail */}
            <img
              src={reel.imgSrc}
              alt={reel.caption}
              className="w-full h-64 object-cover"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Play Reel</p>
            </div>
            {/* Reel Caption */}
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Reel Modal */}
      {activeReel && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setActiveReel(null)}
        >
          <div className="relative w-full p-8 sm:p-12 md:p-16 lg:p-24 h-full max-w-2xl">
            <iframe
              src={`https://www.instagram.com/reel/${activeReel}/embed`}
              width="100%"
              height="100%"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
              allowFullScreen
              title="Active Instagram Reel"
              className="w-full h-full"
            />
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

export default InstagramReels;
