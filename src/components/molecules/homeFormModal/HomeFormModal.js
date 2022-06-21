import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import HomeButton from "../../atoms/HomeButton";
import "./homeFormModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 23,
  p: 4,
  display: "flex",
};

function HomeFormModal() {
  const [open, setOpen] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timeout);
  };
  const handleHidden = () => {
    setShow(false);
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
              action="https://formsubmit.co/jamessokoto007@gmail.com"
              method="post"
              target="hiddenFrame"
              className="php-email-form"
              onSubmit={handleShow}
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
                    type="tel"
                    className="form-control"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="Car Name / Model / Year"
                    placeholder="Car Name / Model / Year  eg (Toyota/Corolla/2022)"
                    required=""
                  />
                </div>{" "}
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="Plate Number / Engine Number"
                    placeholder="Plate Number / Engine Number"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="msg"
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
                  <button id="form-button" name="btn-send">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
      <Modal
        hideBackdrop
        open={show}
        onClose={handleHidden}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <Box onClick={handleHidden}>
            <Button
              onClick={resetForm}
              sx={{
                position: "relative",
                left: "-47%",
                top: "-2.8em",
                backgroundColor: "rgb(170, 55, 55) !important",
                border: "0",
                padding: "0.5em 1em",
                margin: "10px",
                color: "#fff ",
                borderRadius: "0 0 10px 0",
                textAlign: "center",
                textTransform: "lowercase",
                fontWeight: "bold",
              }}
            >
              close
            </Button>
          </Box>
          <Box
            sx={{
              position: "relative",
              right: "10%",
              mt: 2,
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
              Your details would be forwarded to the relevant security agencies
              , we would get back to you shortly
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
