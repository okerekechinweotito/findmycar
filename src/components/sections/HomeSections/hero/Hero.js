import React from "react";
import "./Hero.css";
import HeroImage from "../../../../assets/hero-img3.png";
import HomeButton from "../../../atoms/HomeButton";
import { FadeIn } from "../../../helperFunctions/FadeInAnimation";

function HomeHero() {
  return (
    <>
      <FadeIn>
        <section id="hero" className="hero d-flex align-items-center">
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
                  src="https://uploads-ssl.webflow.com/6006b34c605d36940cc30aad/6075a073d581bd57a0072954_omg-illustration.svg"
                  className="img-fluid"
                  alt=""
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
