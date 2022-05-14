import React from "react";
import Hero from "../components/atoms/Hero";
import Features from "../components/molecules/Features.js";
import Services from "../components/molecules/Services.js";
import Sponsors from "../components/molecules/Sponsors.js";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Sponsors />
    </>
  );
}
