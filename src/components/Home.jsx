import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-[url('images/lights.jpg')]">
      <span className="text-black text-6xl font-lobster ">
        {" "}
        I am a Front-End Developer
      </span>

      <button
        type="button"
        onClick={goToMain}
        className="bg-black text-white p-3 rounded-full hover:text-green-200 font-audio w-40 mt-10"
      >
        Find Out More
      </button>
    </div>
  );
}
