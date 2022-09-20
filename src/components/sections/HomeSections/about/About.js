import React from "react";
import "./about.css";
import AboutImage from "../../../../assets/aboutImage.jpg";
import { FadeIn } from "../../../utils/FadeInAnimation";

function About() {
  return (
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FadeIn>
              <div className="content">
                <h3>Who We Are</h3>
                <h2>
                  FindMyCar is a private security company that offers vehicle
                  security Solutions and Vehicle Tracker Installation Services
                </h2>
                <p>
                  We would help you secure and recover your vehicle in record
                  time. We are building a vibrant safe community where people
                  can become better at preventing vehicle theft.
                </p>
                <div className="text-center text-lg-start"></div>
              </div>
            </FadeIn>
          </div>

          <div className="col-lg-6 d-flex align-items-center ">
            <FadeIn>
              <img src={AboutImage} className="img-fluid" alt="" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
