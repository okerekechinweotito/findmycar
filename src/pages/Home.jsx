import React from "react";
import HomeHero from "../components/sections/HomeSections/hero/Hero.js";
import HomeAbout from "../components/sections/HomeSections/about/About.js";
import HomeValues from "../components/sections/HomeSections/Values.js";
import HomeServices from "../components/sections/HomeSections/Services.js";
import HomePricing from "../components/sections/HomeSections/Pricing.js";
import HomeBlog from "../components/sections/HomeSections/Blog.js";
import HomeContact from "../components/sections/HomeSections/contact/Contact.js";
import HomeTips from "../components/sections/HomeSections/tips/Tips.js";
export default function Home() {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HomeHero />
      <HomeAbout />
      <HomeValues />
      <HomeServices />
      <HomePricing />
      <HomeTips />
      <HomeBlog />
      <HomeContact />
    </article>
  );
}
