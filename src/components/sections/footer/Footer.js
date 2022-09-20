import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
import { FadeIn } from "../../utils/FadeInAnimation";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
                  <HashLink smooth to="/#about" className="footer-link">
                    About us
                  </HashLink>
                </li>

                <li>
                  {" "}
                  <HashLink
                    smooth
                    to="/#recent-blog-posts"
                    className="footer-link"
                  >
                    Our blog
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/#contact" className="footer-link">
                    Contact Us
                  </HashLink>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Support</p>
                </li>

                <li>
                  <HashLink smooth to="/#services" className="footer-link">
                    Services
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/#tips" className="footer-link">
                    Tips
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/#values" className="footer-link">
                    Values
                  </HashLink>
                </li>

                <li>
                  <HashLink smooth to="/#pricing" className="footer-link">
                    Pricing Plans
                  </HashLink>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-list-title">Quick Links</p>
                </li>

                <li>
                  <Link
                    component={RouterLink}
                    to="/stolen-cars"
                    className="footer-link"
                  >
                    Recently Stolen Vehicles
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://legitcar.ng/ "
                    target="_blank"
                    className="footer-link"
                  >
                    Verify Used Cars Before Purchase
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.recovermycar.com/"
                    className="footer-link"
                    target="_blank"
                  >
                    Sign up to a mobile app
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>
          <div className="footer-bottom" style={{ background: "#fff" }}>
            <ul className="social-list">
              <FadeIn>
                <li>
                  <HashLink smooth to="/#contact" className="social-link">
                    <FacebookIcon className="footerIcon" />
                  </HashLink>
                </li>
              </FadeIn>
              <FadeIn>
                <li>
                  <HashLink smooth to="/#contact" className="social-link">
                    <TwitterIcon className="footerIcon" />
                  </HashLink>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <HashLink smooth to="/#contact" className="social-link">
                    <InstagramIcon className="footerIcon" />
                  </HashLink>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <HashLink smooth to="/#contact" className="social-link">
                    <LinkedInIcon className="footerIcon" />
                  </HashLink>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <HashLink smooth to="/#contact" className="social-link">
                    <YouTubeIcon className="footerIcon" />
                  </HashLink>
                </li>
              </FadeIn>

              <FadeIn>
                <li>
                  <HashLink smooth to="/#contact" className="social-link">
                    <ion-icon name="mail-outline"></ion-icon>
                  </HashLink>
                </li>
              </FadeIn>
            </ul>

            <FadeIn>
              <p className="copyright">
                &copy; 2022{" "}
                <a
                  href="https://www.okereke.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Okereke Chinweotito
                </a>
                . All Rights Reserved
              </p>
            </FadeIn>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
