import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import HomeButton from "../../atoms/HomeButton";
import "./homeFormModal.css";

function HomeFormModal() {
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
    setOpen(true);
    disableScroll();
  };
  const handleClose = () => {
    setOpen(false);
    enableScroll();
  };
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
            <form className="php-email-form">
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
    </Box>
  );
}

export default HomeFormModal;
