import React from "react";
import ValueCard from "../../molecules/homeValuesCard/HomeValueCard";
import { Box } from "@mui/material";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";

function Values() {
  return (
    <section id="values" className="values">
      <div className="container">
        <FadeIn>
          <header className="section-header">
            <h2>Our Values</h2>
            <p>Security. Speed. Competence</p>
          </header>
        </FadeIn>

        <FadeIn>
          <div className="row">
            <ValueCard
              title={"Speed"}
              description={
                "We would help you skip all the bureaucratic hiccups and get the police to make your case a maximum priority"
              }
              src={"https://i.ibb.co/YLXrXr9/why-us-removebg-preview.png"}
            />
            <ValueCard
              title={"Speed"}
              description={
                "We would help you skip all the bureaucratic hiccups and get the police to make your case a maximum priority"
              }
              src={"https://i.ibb.co/YLXrXr9/why-us-removebg-preview.png"}
            />
            <ValueCard
              title={"Speed"}
              description={
                "We would help you skip all the bureaucratic hiccups and get the police to make your case a maximum priority"
              }
              src={"https://i.ibb.co/YLXrXr9/why-us-removebg-preview.png"}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Values;
