import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-[url('images/lights.jpg')]">
      <span className="font-lobster text-7xl">I am a</span>
      <div className="font-lobster text-6xl">
        <Typewriter
          options={{
            strings: [
              "Front-End Web Developer",
              "Github Project Wizard",
              "dedicated team player",
            ],
            autoStart: true,
            delay: 150,
            pauseFor: 2000,
            deleteSpeed: 90,
            loop: true,
          }}
        />
      </div>
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
