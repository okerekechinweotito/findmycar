import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./paystackModal.css";
import { PaystackButton } from "react-paystack";

function PaystackModal({ paystackAmount }) {
  const publicKey = "pk_test_6859b4629ef6ae1045e6137c50835ed125b395b2";
  const amount = paystackAmount;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay with PayStack",
    onSuccess: (response) => {
      handleClose();
      alert(
        `Thanks for your payment , Your reference No is ${response.reference}`
      );

      console.log(response);
    },
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <button onClick={handleOpen} className="btn-buy">
        Pay Now
      </button>

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
          <div className="col-lg-6" id="form-wrapper-paystack">
            <div className="col-md-12 text-center" onClick={handleClose}>
              <button id="form-close-button">close</button>
            </div>
            <form
              id="form"
              method="POST"
              target="hiddenFrame"
              className="php-email-form-paystack"
            >
              <div className="row gy-4">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="Email"
                    className="form-control"
                    name="Email Address"
                    placeholder="Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="tel"
                    className="form-control"
                    name="Telephone Number"
                    placeholder="Phone Number"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div
                  className="col-md-12 text-center"
                  id="paystack-button-wrapper"
                >
                  <PaystackButton {...componentProps} />
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
      <a href="#contact	" style={{ visibility: "hidden" }} id="antiScroll">
        {" "}
        h
      </a>
    </Box>
  );
}

export default PaystackModal;
