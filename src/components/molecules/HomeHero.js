import React from "react";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroImg from "./../../assets/hero_img.png";

export default function HomeHero() {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          background: "#0a192f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 5,
          px: { xs: "15px" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#ff5c00",
            fontWeight: "bold",
            fontSize: { xs: "40px", md: "100px" },
            mb: 3,
          }}
        >
          FIND YOUR CAR
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={HeroImg} alt="" className="hero_img" />
        </Box>
        <Link to="find">
          <Button className="hero_btn" variant="contained" disableElevation>
            Recover
          </Button>
        </Link>
      </Box>
    </>
  );
}
