import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import HomeButton from "../homeButton/HomeButton";
import "./homeFormModal.css";
import { storage } from "../../../firebase/config";
import { database } from "../../../firebase/config";
import {
  getDownloadURL,
  ref as ref_storage,
  uploadBytesResumable,
} from "firebase/storage";
import { set, ref as ref_database } from "firebase/database";
import { uid } from "uid";
import { Link } from "react-router-dom";
import { upload } from "@testing-library/user-event/dist/upload";

function HomeFormModal() {
  const [victimName, setVictimName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [name, setName] = React.useState("");
  const [year, setYear] = React.useState("");
  const [plateNumber, setPlateNumber] = React.useState("");
  const [engineNumber, setEngineNumber] = React.useState("");
  const [color, setColor] = React.useState("");
  const [seater, setSeater] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [type, setType] = React.useState("");
  const [glass, setGlass] = React.useState("");
  const [imageUpload, setImageUpload] = React.useState("");
  const [queryId, setQueryId] = React.useState("");
  const [uploadProgress, setUploadProgress] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const uploadDetails = (url) => {
    console.log(url);
    set(ref_database(database, `carDetails/${queryId}`), {
      victimName,
      email,
      phoneNumber,
      address,
      name,
      year,
      plateNumber,
      engineNumber,
      color,
      seater,
      location,
      date,
      description,
      type,
      glass,
      imageLink: url,
      id: queryId,
    });
  };

  const uploadImage = async () => {
    if (imageUpload === null) return;
    const storageRef = ref_storage(storage, `carImages/${queryId}`);
    const uploadTask = uploadBytesResumable(storageRef, imageUpload);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressDecimal =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        const progress = Math.trunc(progressDecimal);
        setUploadProgress(progress);
      },
      null,
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          uploadDetails(downloadURL);
        });
      }
    );
  };

  const createNewCar = async (e) => {
    e.preventDefault();
    uploadImage();
    handleShow();
  };

  const handleLoader = () => {
    if (uploadProgress < 100) {
      return <div> Please wait... Uploading {uploadProgress}% </div>;
    } else {
      return (
        <div>
          Upload Complete ! Your stolen-car details has been added to our
          database and will be forwarded to the relevant security agencies, they
          may contact you as need be. <br /> <br />{" "}
          <Link to="/stolen-cars">
            {" "}
            <i
              style={{
                color: "#14A800",
                cursor: "pointer",
              }}
            >
              {" "}
              View our Database
            </i>
          </Link>
        </div>
      );
    }
  };

  const handleShow = (e) => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(timeout);
  };
  const handleHidden = () => {
    setShow(false);
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
              className="php-email-form"
              encType="multipart/form-data"
              onSubmit={createNewCar}
            >
              <input type="hidden" name="_captcha" value="false" />

              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="Name Of Victim"
                    className="form-control"
                    placeholder="Your Name"
                    value={victimName}
                    onChange={(e) => setVictimName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="Email"
                    className="form-control"
                    name="Email Address"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    name="Telephone Number"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Car Name / Model"
                    placeholder="Car Name  eg (Toyota Corolla)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Car Name / Model / Year"
                    placeholder="Model Year  eg (2009)"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Plate Number "
                    placeholder="Plate Number eg (GWA-392GU)"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Plate Number / Engine Number"
                    placeholder="Engine Number eg (5GZEV337X7J)"
                    value={engineNumber}
                    onChange={(e) => setEngineNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Color"
                    placeholder="Color eg (White)"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Seat Count"
                    placeholder="Seat Count eg (4 Seater Vehicle)"
                    value={seater}
                    onChange={(e) => setSeater(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Vehicle Type"
                    placeholder="Vehicle Type eg (Bus / SUV / Salon /Truck)"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  />
                </div>{" "}
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Tinted"
                    placeholder="Tinted eg (Normal Glass / Tinted Glass )"
                    value={glass}
                    onChange={(e) => setGlass(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Location"
                    placeholder="Location of theft eg (Orji, Owerri)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="Date"
                    placeholder="Date eg ( 27th August 2022)"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="Additional information"
                    rows="6"
                    placeholder="Further description plus any Additional Information"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    accept="image/*"
                    onChange={(e) => {
                      setImageUpload(e.target.files[0]);
                      setQueryId(uid());
                    }}
                    required
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
              {handleLoader()}
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
