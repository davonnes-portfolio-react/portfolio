import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}
