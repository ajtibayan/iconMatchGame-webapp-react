import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Assets
import "./App.css";
import GameHome from "./views/GameHome";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<GameHome />} />
      <Route path="/*" element={<GameHome />} />
    </Routes>
  );
}

export default App;
