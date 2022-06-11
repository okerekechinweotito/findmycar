import React from "react";
import "./contact.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { FadeIn } from "../../../helperFunctions/FadeInAnimation";
function Contact() {
  return (
    <section id="contact" className="contact">
      <FadeIn>
        <div className="container">
          <header className="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <i>
                      <LocationOnOutlinedIcon
                        style={{
                          fontSize: "1.3em",
                          display: "inline-block",
                          color: " #14a800",
                        }}
                      />
                    </i>
                    <h3>Address</h3>
                    <p>
                      No 28, Bishops Court, beside Imo State University
                      <br />
                      Owerri-North, Owerri, Imo State
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i>
                      <PhoneInTalkOutlinedIcon
                        style={{
                          fontSize: "1.3em",
                          display: "inline-block",
                          color: " #14a800",
                        }}
                      />
                    </i>
                    <h3>Call Us</h3>
                    <p>
                      Owerri
                      <br />
                      +234 000 000 000
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i>
                      <MailOutlineOutlinedIcon
                        style={{
                          fontSize: "1.3em",
                          display: "inline-block",
                          color: " #14a800",
                        }}
                      />
                    </i>
                    <h3>Email Us</h3>
                    <p>
                      findMyCar@gmail.com
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i>
                      <AccessTimeOutlinedIcon
                        style={{
                          fontSize: "1.3em",
                          display: "inline-block",
                          color: "#14a800",
                        }}
                      />
                    </i>
                    <h3>Open Hours</h3>
                    <p>
                      Sunday - Saturday
                      <br />
                      6:00AM - 06:00AM
                    </p>
                    <br />
                    <p>
                      Service is always available
                      <br />
                      24 hours Daily , 7 days a week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action="process.php"
                method="post"
                className="php-email-form"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="UName"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="Email"
                      className="form-control"
                      name="Email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="Subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="msg"
                      rows="6"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button name="btn-send" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Contact;
