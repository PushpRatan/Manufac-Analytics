import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlavanoidTable from "./components/FlavanoidTable";
import GammaTable from "./components/GammaTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlavanoidTable />} />
        <Route path="/gamma" element={<GammaTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
