import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <FadeIn>
            <div className="footer-top">
              <div className="footer-brand">
                <Link component={RouterLink} to="/" className="logo">
                  FindMyCar
                </Link>

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
                  <Link href="#about" className="footer-link">
                    About us
                  </Link>
                </li>

                <li>
                  <Link href="#recent-blog-posts" className="footer-link">
                    Our blog
                  </Link>
                </li>

                <li>
                  <Link href="#contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Support</p>
                </li>

                <li>
                  <Link href="#services" className="footer-link">
                    Services
                  </Link>
                </li>

                <li>
                  <Link href="#features" className="footer-link">
                    Tips
                  </Link>
                </li>

                <li>
                  <Link href="#values" className="footer-link">
                    Values
                  </Link>
                </li>

                <li>
                  <Link href="#pricing" className="footer-link">
                    Pricing Plans
                  </Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Quick Links</p>
                </li>

                <li>
                  <Link component={RouterLink} to="/" className="footer-link">
                    Recovered Cars
                  </Link>
                </li>
                <li>
                  <Link component={RouterLink} to="/" className="footer-link">
                    Stolen Vehicles
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>
          <div className="footer-bottom" style={{ background: "#fff" }}>
            <ul className="social-list">
              <FadeIn>
                <li>
                  <Link href="#contact" className="social-link">
                    <FacebookIcon className="footerIcon" />
                  </Link>
                </li>
              </FadeIn>
              <FadeIn>
                <li>
                  <Link href="#contact" className="social-link">
                    <TwitterIcon className="footerIcon" />
                  </Link>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <Link href="#contact" className="social-link">
                    <InstagramIcon className="footerIcon" />
                  </Link>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <Link href="#contact" className="social-link">
                    <LinkedInIcon className="footerIcon" />
                  </Link>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <Link href="#contact" className="social-link">
                    <YouTubeIcon className="footerIcon" />
                  </Link>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <Link href="#contact" className="social-link">
                    <ion-icon name="mail-outline"></ion-icon>
                  </Link>
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
