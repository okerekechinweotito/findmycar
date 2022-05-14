import React from "react";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroImg from "./../../assets/hero_img.png";

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          height: "auto",
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
            color: "#130f40",
            fontWeight: "bold",
            fontSize: { xs: "40px", md: "100px" },
            mb: 3,
          }}
        >
          FIND YOUR CAR
        </Typography>
        <Box>
          <img src={HeroImg} alt="" />
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
