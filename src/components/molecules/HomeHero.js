import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroImg from "./../../assets/hero_img.png";
import HomeButton from "../atoms/HomeButton";
import Link from "@mui/material/Link";

export default function HomeHero() {
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "75vh", lg: "75vh", xl: "75vh" },
          width: "100vw",
          background: "#0a192f",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "right", md: "center" },
          justifyContent: "space-around",
          px: { xs: "15px" },
          pt: 12,
          overflowY: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "initial",
              sm: "initial",
              lg: "initial",
              xl: "initial",
            },
            maxWidth: { xs: "100%", xl: "50%" },
            px: { xs: "1em", xl: "4em" },
            overflowY: "hidden",
            mr: "2em",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#ff5c00",
              fontWeight: "bold",
              fontSize: { xs: "1.8em", md: "2.2em", xl: "2.7em" },
              fontFamily: "Mochiy Pop One",
              letterSpacing: { xs: "5px", md: "15px" },
              overflowY: "hidden",
              mt: "1em",
              alignSelf: { xs: "center", md: "flex-start" },
              lineHeight: "1.5em",
            }}
          >
            Recover Your Stolen Car
          </Typography>
          <Box
            sx={{
              maxWidth: "30em",
              mr: { xs: "0em", xl: "5em" },
              mt: { xs: "5em", sm: "2em" },
              mb: "2em",
              cursor: "pointer",
              display: { xs: "block", md: "none" },
              alignSelf: "center",
              "&:hover": {
                transform: "scale(1.1)",
              },
              transition: "1s",
            }}
          >
            <img src={HeroImg} alt="Cars" style={{ width: "100%" }} />
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#e6e6e6",
              fontFamily: "Mochiy Pop One",
              lineHeight: "1.5em",
              fontSize: { xs: "1.5em", xl: "1.em" },
              mt: "1.5em",
            }}
          >
            Get your <span style={{ color: "#ff5c00" }}>stolen</span> vehicle
            back fast with the best Vehicle Theft Recovery System
          </Typography>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              alignSelf: { xs: "flex-start", sm: "center", md: "flex-start" },
              textDecoration: "none",
            }}
          >
            <HomeButton
              text={"Recover"}
              style={{
                padding: "1em 5em",
                margin: "2em 0",
                letterSpacing: "5px",
              }}
            />
          </Link>
        </Box>

        <Box
          sx={{
            maxWidth: "50em",
            mr: { xs: "2em", xl: "5em" },
            cursor: "pointer",
            display: { xs: "none", md: "block" },
            "&:hover": {
              transform: "scale(1.1)",
            },
            transition: "1s",
          }}
        >
          <img src={HeroImg} alt="Cars" style={{ width: "100%" }} />
        </Box>
      </Box>
    </>
  );
}
