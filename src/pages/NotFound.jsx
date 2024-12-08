import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const hasReferrer = document.referrer.includes(window.location.hostname);

  const handleBack = () => {
    if (hasReferrer) {
      // Navigate to the previous page
      navigate(-1); // -1 goes back to the previous page in history
    } else {
      // Navigate to the home page
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-secondary text-center font-sans">
      <h1 className="text-6xl font-bold text-green-accent">404</h1>
      <p className="text-lg mt-4 text-gray-accent">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <button
        onClick={handleBack}
        className="mt-6 px-6 py-3 bg-green-accent text-primary font-medium rounded-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
      >
        {hasReferrer ? "Go Back" : "Back to Home"}
      </button>
    </div>
  );
};

export default NotFound;
