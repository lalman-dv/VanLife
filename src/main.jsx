import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans  />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
