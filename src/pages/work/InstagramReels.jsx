import React from "react";
import WorkTopBarLink from "../../components/work/WorkTopBarLink";
import { Link } from "react-router-dom";

const instagramReels = [
  {
    id: 1,
    imgSrc: "/work/graphic_design/sample_img.jpg", // Replace with your reel thumbnail path
    caption: "Amazing sunset in the city!",
    reelLink: "https://www.instagram.com/reel/xxxxxxx", // Replace with the real Instagram reel link
  },
  {
    id: 2,
    imgSrc: "/work/graphic_design/sample_img.jpg",
    caption: "Behind the scenes of my day!",
    reelLink: "https://www.instagram.com/reel/yyyyyyy",
  },
  {
    id: 3,
    imgSrc: "/work/graphic_design/sample_img.jpg",
    caption: "Exploring the nature trails!",
    reelLink: "https://www.instagram.com/reel/zzzzzzz",
  },
  // Add more objects as needed
];

const InstagramReels = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Instagram Reels
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
        {instagramReels.map((reel) => (
          <div
            key={reel.id}
            className="group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            onClick={() => window.open(reel.reelLink, "_blank")}
          >
            <img
              src={reel.imgSrc}
              alt={reel.caption}
              className="w-full h-64 object-cover transition-transform duration-300"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramReels;
