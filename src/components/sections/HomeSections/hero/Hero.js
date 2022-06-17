import React from "react";
import "./Hero.css";
import HeroImage from "../../../../assets/Parking-amico.svg";
import HomeButton from "../../../atoms/HomeButton";
import { FadeIn } from "../../../helperFunctions/FadeInAnimation";

function HomeHero() {
  return (
    <>
      <FadeIn>
        <section id="hero" className="hero d-flex align-items-center mt-5">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 d-flex flex-column justify-content-center ">
                <h1>
                  {" "}
                  Recover your stolen car in record time. File a report with us
                  immediately
                </h1>
                <h2>
                  Get your stolen vehicle back fast with the best Vehicle Theft
                  Recovery System in the world
                </h2>
                <div>
                  <div className="text-center text-lg-start">
                    <HomeButton
                      text={"Recover"}
                      style={{
                        padding: "1em 5em",
                        margin: "2em 0",
                        letterSpacing: "5px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-img ">
                <img
                  src={HeroImage}
                  className="img-fluid"
                  alt=""
                  style={{ margin: "-5em 0 0 0" }}
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}

export default HomeHero;
