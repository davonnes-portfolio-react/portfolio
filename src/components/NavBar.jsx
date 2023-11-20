import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="bg-pink-300 p-5 w-full">
      <div className="flex flex-col md:flex-row md:justify-between ">
        <h1
          className="text-3xl mb-4 md:mb-0 font-audio cursor-pointer"
          onClick={goHome}
        >
          Portfolio
        </h1>
        <ul className="flex flex-wrap gap-5 font-audio text-lg">
          <Link className="hover:text-white">
            <li>About</li>
          </Link>
          <Link className="hover:text-white">
            <li>Education</li>
          </Link>
          <Link className="hover:text-white">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
