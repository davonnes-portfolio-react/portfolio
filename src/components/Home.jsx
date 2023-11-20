import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <span className="text-black text-5xl font-lobster ">
        {" "}
        I am a Front-End Developer
      </span>

      <button
        type="button"
        onClick={goToMain}
        className="bg-pink-400 p-3 rounded-full hover:text-white font-audio w-40 mt-10"
      >
        See More
      </button>
    </div>
  );
}
