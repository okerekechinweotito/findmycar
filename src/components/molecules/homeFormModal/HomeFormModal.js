import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import HomeButton from "../../atoms/HomeButton";
import "./homeFormModal.css";

function HomeFormModal() {
  const [open, setOpen] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    disableScroll();
    const timeout = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(timeout);
  };
  const handleHidden = () => {
    setShow(false);
    handleClose();
  };

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
    setOpen(true);
    disableScroll();
  };
  const handleClose = () => {
    setOpen(false);
    enableScroll();
  };

  function resetForm() {
    document.getElementById("form").reset();
  }
  return (
    <Box>
      <HomeButton
        handleOpen={handleOpen}
        text={"File a Report"}
        style={{
          padding: "1em 5em",
          margin: "2em 0",
          letterSpacing: "5px",
        }}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableScrollLock
      >
        <Fade in={open}>
          <div className="col-lg-6" id="form-wrapper">
            <div className="col-md-12 text-center" onClick={handleClose}>
              <button id="form-close-button">close</button>
            </div>
            <form
              id="form"
              action="https://formsubmit.co/findmycar.nigeria@gmail.com"
              method="POST"
              className="php-email-form"
              onSubmit={handleShow}
              enctype="multipart/form-data"
            >
              <input
                type="hidden"
                name="_cc"
                value="findmycar.nigeria@gmail.com"
              />
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="Name Of Victim"
                    className="form-control"
                    placeholder="Your Name"
                    required="true"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="Email"
                    className="form-control"
                    name="Email Address"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="Telephone Number"
                    placeholder="Phone Number"
                    required="true"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="Car Name / Model / Year"
                    placeholder="Car Name / Model / Year  eg (Toyota/Corolla/2022)"
                    required="true"
                  />
                </div>{" "}
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="Plate Number / Engine Number"
                    placeholder="Plate Number / Engine Number"
                    required="true"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="Location plus additional information"
                    rows="6"
                    placeholder="Describe Location of theft plus any additional information"
                    required=""
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <label htmlFor="car-image">Upload Car Image</label>

                  <input
                    id="car-image"
                    type="file"
                    title=" Upload Car Image"
                    className="form-control"
                    name="Car Image"
                    required=""
                  />
                </div>{" "}
                <div className="col-md-12 text-center">
                  <button id="form-button">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
      <Modal
        open={show}
        onClose={handleHidden}
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
          <Box onClick={handleHidden}>
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
              Your details have been forwarded to the relevant security
              agencies. We would get back to you shortly
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
    </Box>
  );
}

export default HomeFormModal;
