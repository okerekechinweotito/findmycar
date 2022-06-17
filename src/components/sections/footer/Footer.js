import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <FadeIn>
            <div className="footer-top">
              <div className="footer-brand">
                <a href="#" className="logo">
                  FindMyCar
                </a>

                <p className="footer-text">
                  FindMyCar is a private security company that offers vehicle
                  security Solutions and Vehicle Tracker Installation Services.
                  We would help you secure and recover your vehicle in record
                  time.
                </p>
              </div>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Company</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    About us
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Our blog
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Support</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Help center
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Tips
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Privacy policy
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Terms & conditions
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Quick Links</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Recovered Cars
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Stolen Vehicles
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Pricing plans
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
          <div className="footer-bottom" style={{ background: "#fff" }}>
            <ul className="social-list">
              <FadeIn>
                <li>
                  <a href="#" className="social-link">
                    <FacebookIcon className="footerIcon" />
                  </a>
                </li>
              </FadeIn>
              <FadeIn>
                <li>
                  <a href="#" className="social-link">
                    <TwitterIcon className="footerIcon" />
                  </a>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <a href="#" className="social-link">
                    <InstagramIcon className="footerIcon" />
                  </a>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <a href="#" className="social-link">
                    <LinkedInIcon className="footerIcon" />
                  </a>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <a href="#" className="social-link">
                    <YouTubeIcon className="footerIcon" />
                  </a>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="mail-outline"></ion-icon>
                  </a>
                </li>
              </FadeIn>
            </ul>

            <FadeIn>
              <p className="copyright">
                &copy; 2022 <a href="#">Okereke Chinweotito</a>. All Rights
                Reserved
              </p>
            </FadeIn>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
