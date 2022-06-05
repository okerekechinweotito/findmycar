import React from "react";
import HomeHero from "../components/sections/HomeHero";
import HomeFeatures from "../components/sections/HomeFeatures.js";
import HomeServices from "../components/sections/HomeServices.js";

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
      {/*  <HomeServices /> */}
    </article>
  );
}
