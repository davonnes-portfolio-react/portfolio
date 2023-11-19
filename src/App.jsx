import React from "react";
import { NavBar } from "./components/NavBar";
import About from "./components/About";

export default function App() {
  return (
    <>
      <div className="bg-pink-300 p-5 w-full">
        <NavBar />
      </div>

      <About />
    </>
  );
}
