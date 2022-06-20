import React from "react";
import ValueCard from "../../molecules/homeValuesCard/HomeValueCard";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";
import ValueImg1 from "../../../assets/valueimg1.svg";
import ValueImg2 from "../../../assets/valueimg2.svg";
import ValueImg3 from "../../../assets/valueimg3.svg";

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
              title={"Security"}
              description={
                "Our security measures ensures that your vehicles are protected at all times"
              }
              src={ValueImg1}
            />
            <ValueCard
              title={"Speed"}
              description={
                "We would help you skip all the bureaucratic hiccups and get the police to make your case a maximum priority"
              }
              src={ValueImg2}
            />
            <ValueCard
              title={"Competence"}
              description={
                "Our team is made up of highly skilled police and millitary personnel who are always able to recover your vehicles"
              }
              src={ValueImg3}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Values;
