import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import GradientIcon from "@mui/icons-material/Gradient";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import PeopleIcon from "@mui/icons-material/People";
import { HashLink } from "react-router-hash-link";
import { FadeIn } from "../helperFunctions/FadeInAnimation";

function CarCard({
  carImageLink,
  carNameModel,
  carYear,
  carColor,
  carPlateNumber,
  carEngineNumber,
  carTinted,
  carSeater,
  locationOfTheft,
  dateOfReport,
}) {
  return (
    <FadeIn>
      <Box
        sx={{
          width: { xs: "20em", sm: "22em", md: "25em" },
          backgroundColor: "#EDF1F7",
          borderRadius: "1em",
          border: "1px solid #fff",
          boxShadow: "0px 10px 10px 10px rgba(1, 41, 112, 0.08)",
        }}
      >
        <Box
          sx={{ padding: "0.7em", borderRadius: "1.5em" }}
          className="img-fluid"
          component="img"
          src={carImageLink}
          alt="Stolen Car"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5em 1.5em",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "Nunito",
              fontSize: { xs: "1.1rem", md: "1.375rem" },
              cursor: "pointer",
              "&:hover": {
                color: "#2491DF",
              },
            }}
          >
            {carNameModel}
          </Typography>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontFamily: "Nunito",
              fontSize: { xs: "0.7rem", md: "0.875rem" },
              cursor: "pointer",
              border: "2px dashed #2491DF",
              borderRadius: "14px",
              padding: "3px 12px",
              "&:hover": {
                color: "#2491DF",
              },
            }}
          >
            {carYear}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexFlow: "row",
            padding: "0.5em 1em",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ margin: "1em 0em 0 0" }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                display: "flex",
                fontFamily: "Nunito",
                fontSize: { xs: "0.8rem", md: "1rem" },
                cursor: "pointer",
                margin: "0 0 1em 0",

                "&:hover": {
                  color: "#2491DF",
                },
              }}
            >
              <ColorLensIcon
                sx={{
                  color: "#2491DF",
                  margin: { xs: "-3px 2px 0 0", md: "-1px 2px 0 0" },
                }}
              />{" "}
              <span> &nbsp; {carColor}</span>
            </Typography>
            <Typography
              variant="h6"
              component="span"
              sx={{
                display: "flex",
                fontFamily: "Nunito",
                fontSize: { xs: "0.8rem", md: "1rem" },
                cursor: "pointer",
                margin: "0 0 1em 0",

                "&:hover": {
                  color: "#2491DF",
                },
              }}
            >
              <AddCardIcon
                sx={{
                  color: "#2491DF",
                  margin: { xs: "-3px 2px 0 0", md: "-1px 2px 0 0" },
                }}
              />{" "}
              <span> &nbsp; {carEngineNumber}</span>
            </Typography>

            <Typography
              variant="h6"
              component="span"
              sx={{
                display: "flex",
                fontFamily: "Nunito",
                fontSize: { xs: "0.8rem", md: "1rem" },
                cursor: "pointer",
                margin: "0 0 0em 0",

                "&:hover": {
                  color: "#2491DF",
                },
              }}
            >
              <PeopleIcon
                sx={{
                  color: "#2491DF",
                  margin: { xs: "-3px 2px 0 0", md: "-1px 2px 0 0" },
                }}
              />{" "}
              <span> &nbsp; {carSeater}</span>
            </Typography>
          </Box>

          <Box
            sx={{
              margin: { xs: "1em 0.7em 0 0", md: "1em 2em 0 0" },
            }}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{
                display: "flex",
                fontFamily: "Nunito",
                fontSize: { xs: "0.8rem", md: "1rem" },
                cursor: "pointer",
                margin: "0 0 1em 0",

                "&:hover": {
                  color: "#2491DF",
                },
              }}
            >
              <CreditCardIcon
                sx={{
                  color: "#2491DF",
                  margin: { xs: "-3px 2px 0 0", md: "-1px 2px 0 0" },
                }}
              />{" "}
              <span>&nbsp; {carPlateNumber}</span>
            </Typography>

            <Typography
              variant="h6"
              component="span"
              sx={{
                display: "flex",
                fontFamily: "Nunito",
                fontSize: { xs: "0.8rem", md: "1rem" },
                cursor: "pointer",
                margin: "0 0 1em 0",
                "&:hover": {
                  color: "#2491DF",
                },
              }}
            >
              <GradientIcon
                sx={{
                  color: "#2491DF",
                  margin: { xs: "-3px 2px 0 0", md: "-1px 2px 0 0" },
                }}
              />{" "}
              <span>&nbsp; {carTinted}</span>
            </Typography>

            <Typography
              variant="h6"
              component="span"
              sx={{
                display: "flex",
                fontFamily: "Nunito",
                fontSize: { xs: "0.8rem", md: "1rem" },
                cursor: "pointer",
                margin: "0 0 0em 0",
                "&:hover": {
                  color: "#2491DF",
                },
              }}
            >
              <NotListedLocationIcon
                sx={{
                  color: "#2491DF",
                  margin: { xs: "-3px 2px 0 0", md: "-1px 2px 0 0" },
                }}
              />{" "}
              <span> &nbsp; {locationOfTheft}</span>
            </Typography>
          </Box>
        </Box>
        <hr
          style={{
            width: "15em",
            margin: " 1em auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5em 2em",
            margin: "0 0 1em 0",
          }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{
              letterSpacing: "1px",
              fontFamily: "Nunito",
              cursor: "pointer",
              fontSize: { xs: "1rem", md: "1.2rem" },
              "&:hover": {
                color: "#2491DF",
              },
            }}
          >
            {dateOfReport}
          </Typography>

          <HashLink smooth to="/#contact">
            <Button
              sx={{
                backgroundColor: "#2491df ",
                border: "0",
                padding: "10px 20px",
                margin: "-5px 0 0 0",
                color: "#fff",
                transition: "0.4s",
                fontSize: { xs: "0.7rem", md: "0.7rem" },
                borderRadius: "4px",
                fontFamily: "Nunito",
                letterSpacing: "3px",
                "&:hover": {
                  backgroundColor: "#14A800",
                },
              }}
            >
              Report
            </Button>
          </HashLink>
        </Box>
      </Box>
    </FadeIn>
  );
}

export default CarCard;
