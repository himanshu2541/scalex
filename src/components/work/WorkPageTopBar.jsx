import React from "react";
import { Link, useLocation } from "react-router-dom";
import workLinks from "./workLinks";

const WorkPageTopBar = ({ title = "Title" }) => {
  const location = useLocation();
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
        {title}
      </h1>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="block text-center text-sm text-green-accent font-medium mb-8 hover:underline"
      >
        &larr; Back to Home
      </Link>

      {/* WorkTopBarLink */}
      <div className="text-center mb-12">
        {workLinks.map((obj, i) => {
          const activeLink = location.pathname.includes(obj.link);
          return (
            <React.Fragment key={i}>
              <Link
                to={obj.link}
                className={`text-md hover:underline mx-4 ${
                  activeLink ? "text-green-accent" : ""
                }`}
              >
                {obj.title}
              </Link>

              {i !== workLinks.length - 1 && (
                <span className="text-lg text-gray-500">|</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default WorkPageTopBar;
