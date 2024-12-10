import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Root from "./layout/Root.jsx";
import NotFound from "./pages/NotFound.jsx";
import GraphicDesign from "./pages/work/GraphicDesign.jsx";
import WebDevelopment from "./pages/work/WebDevlopment.jsx";
import ContentWriting from "./pages/work/ContentWriting.jsx";
import VideoContent from "./pages/work/VideoContent.jsx";
import ShortVideo from "./pages/work/ShortVideo.jsx";
// import Admin from "./pages/Admin.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // Simplifies defining the index route
        element: <Home />,
      },
      {
        path: "work/graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "work/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "work/content-writing",
        element: <ContentWriting />,
      },
      {
        path: "work/short-videos",
        element: <ShortVideo />,
      },
      {
        path: "work/videos",
        element: <VideoContent />,
      },
      // {
      //   path: "admin",
      //   element: <Admin />
      // }
    ],
  },
  {
    path: "*", // Handles all unmatched routes
    element: <NotFound />,
  },
]);

// Create a fallback loading element
// eslint-disable-next-line react-refresh/only-export-components
const Fallback = () => (
  <div className="flex items-center justify-center h-screen bg-primary text-secondary font-sans">
    <div className="text-center">
      <div className="loader animate-spin border-t-4 border-green-accent border-solid rounded-full w-16 h-16 mx-auto"></div>
      <p className="text-lg mt-4">Loading...</p>
    </div>
  </div>
);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  </StrictMode>
);
