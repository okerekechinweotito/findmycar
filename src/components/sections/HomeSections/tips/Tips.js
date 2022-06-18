import React from "react";
import "./tips.css";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { FadeIn } from "../../../helperFunctions/FadeInAnimation";
import TipsImg from "../../../../assets/tips.jpg";
function Tips() {
  return (
    <section id="features" className="features">
      <FadeIn>
        <div className="container ">
          <div className="row feture-tabs ">
            <div className="col-lg-6">
              <h3>Here are some crucial vehicle Tips and advice to abide by</h3>

              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1">
                  <p>
                    Whether an old vehicle or when you buy a new vehicle, its a
                    great thing to protect yourself from the threat of theft and
                    get peace of mind that you’ll be able to recover it if it’s
                    ever stolen. Below are some useful tips
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Install a steering wheel lock</h4>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <i>
                      {" "}
                      <DoneOutlinedIcon color="success" />{" "}
                    </i>
                    <h4>Always close your car windows after use</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Install a Tracking System.</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Always lock your car doors after use</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Install a Car Alarm</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Never leave your valuables in a car</h4>
                  </div>
                </div>

                <div className="tab-pane fade show" id="tab2">
                  <p>
                    Kuagi Inovatif Hub is a community of like-minded individuals
                    working in various business sectors, promoting innovation
                    for technology-based solutions and create a unique
                    environment where individuals, ideas, and solutions can
                    thrive.
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2"></i>
                    <h4>Co-working space</h4>
                  </div>
                  <p>
                    This space is designed to provide a productive and
                    collaborative environment for our (Customers) dynamic
                    inhabitants With WiFi, Printers, Tea, Coffee, and Snacks
                    available.
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2"></i>
                    <h4>SIWES/ MEETUP SPACE</h4>
                  </div>
                  <p>
                    This space is designed to provide a productive and
                    collaborative environment for communities, companies and
                    individual to learn about Information Technology (IT) and
                    also a space for organising Events, Seminars, Conferences,
                    Meetups, Bootcamps e.t.c
                  </p>
                </div>

                <div className="tab-pane fade show" id="tab3">
                  <p>
                    This is designed to bridge the gender technology gap by
                    helping women access training and educational opportunities
                    in areas of Science Technology Engineering and Mathematics
                    (STEM) and Information Technology (IT) through meetups,
                    workshops, seminars, bootcamps and conferences. Aimed at
                    building digital literacy in women, expose them to available
                    employment and entrepreneurship opportunities within the
                    technology space.
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2"></i>
                    <h4>Building Capacity</h4>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2"></i>
                    <h4>Technical Skill</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2"></i>
                    <h4>Digital Skill Training</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2"></i>
                    <h4>Hangouts</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img src={TipsImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Tips;
