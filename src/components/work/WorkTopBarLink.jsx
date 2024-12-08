import React from "react";
import workLinks from "./workLinks";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const WorkTopBarLink = () => {
  const location = useLocation();

  return (
    <>
      {workLinks.map((obj, i) => {
        const activeLink = location.pathname.includes(obj.link);
        return (
          <React.Fragment key={i}>
            <Link
              to={obj.link}
              className={`text-md hover:underline mx-4 ${activeLink ? "text-green-accent" : ""}`}
            >
              {obj.title}
            </Link>

            {i !== workLinks.length - 1 && (
              <span className="text-lg text-gray-500">|</span>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default WorkTopBarLink;
