import React from "react";
import HomeHero from "../components/sections/HomeHero";
import HomeFeatures from "../components/sections/HomeFeatures.js";
export default function Home() {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HomeHero />
      <HomeFeatures />
    </article>
  );
}
