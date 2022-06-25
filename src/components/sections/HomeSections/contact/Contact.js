import * as React from "react";
import "./contact.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailIcon from "@mui/icons-material/Email";
import { FadeIn } from "../../../helperFunctions/FadeInAnimation";
import { Typography, Box, Modal, Fade, Backdrop, Button } from "@mui/material";

function Contact() {
  const [open, setOpen] = React.useState(false);

  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }
  const handleOpen = () => {
    disableScroll();
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 500);
    return () => clearTimeout(timeout);
  };
  const handleClose = () => {
    enableScroll();
    setOpen(false);
  };

  function resetForm() {
    document.getElementById("form").reset();
  }

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
                          color: " #2491DF",
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
                          color: "#2491DF",
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
                          color: " #2491DF",
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
                          color: "#2491DF",
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
                id="form"
                //   action="https://formsubmit.co/findmycar.nigeria@gmail.com"
                //   method="post"
                //   target="hiddenFrame"
                className="php-email-form"
                onSubmit={handleOpen}
              >
                <input type="hidden" name="_captcha" value="false" />
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="Email"
                      className="form-control"
                      name="Email Address"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="Subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="Message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
              <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "20em", md: "25em" },
                    backgroundColor: "#edf1f7",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    boxShadow: 23,
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box onClick={handleClose}>
                    <Button
                      onClick={resetForm}
                      sx={{
                        position: "relative",
                        left: { xs: "-2.3em", md: "-2.3em" },
                        top: { xs: "-2.3em", md: "-2.3em" },
                        backgroundColor: "rgb(170, 55, 55)",
                        border: "0",
                        padding: "0.5em 1em",
                        margin: "0",
                        color: "#fff ",
                        transition: "0.4s",
                        borderRadius: "0 0 10px 0",
                        fontWeight: "bold",
                        textAlign: "center",
                        textTransform: "lowercase",

                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      close
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      marginBottom: "1em",
                    }}
                  >
                    <Typography
                      id="transition-modal-title"
                      variant="p"
                      sx={{
                        fontFamily: '"Nunito", sans-serif',
                        color: "#2491df",
                      }}
                    >
                      Your Message has been forwarded to FindMyCar Team. We
                      would get back to you shortly
                    </Typography>
                  </Box>
                </Box>
              </Modal>
              <iframe
                title="hiddenFrame"
                name="hiddenFrame"
                width="0"
                height="0"
                style={{ display: "none" }}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Contact;
