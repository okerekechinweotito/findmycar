import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/sections/Header.js";
import Home from "./pages/Home";
import Footer from "./components/sections/footer/Footer";
import BackToTopButton from "./components/molecules/backToTopButton/BackToTopButton.js";
import StolenCars from "./pages/StolenCars.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stolen-cars" element={<StolenCars />} />
        </Routes>
        <BackToTopButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}
