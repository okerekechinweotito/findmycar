import React from "react";
import HomeHero from "../components/molecules/HomeHero";
import HomeFeatures from "../components/molecules/HomeFeatures.js";
import HomeServices from "../components/molecules/HomeServices.js";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeServices />
    </>
  );
}
