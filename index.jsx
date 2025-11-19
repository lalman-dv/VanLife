import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Vans from "/src/pages/Van/Vans";
import VanDetail from "/src/pages/Van/VanDetail";
import Layout from "/src/components/Layout";
import Income from "./src/pages/Host/Income";
import HostLayout from "./src/components/HostLayout";
import Reviews from "./src/pages/Host/Reviews";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<HostLayout />}>
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
