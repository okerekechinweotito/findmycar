import { Box, Grid } from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5em",
        color: "#2491DF",
        margin: "2em 0 0em 0",
        boxShadow: "0px -10px 10px 10px rgba(1, 41, 112, 0.08)",
        padding: "2em 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1em",
          color: "#14A800",
        }}
      >
        <FacebookIcon
          fontSize={"large"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#2491DF",
            },
          }}
        />{" "}
        <TwitterIcon
          fontSize={"large"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#2491DF",
            },
          }}
        />{" "}
        <InstagramIcon
          fontSize={"large"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#2491DF",
            },
          }}
        />{" "}
        <LinkedInIcon
          fontSize={"large"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#2491DF",
            },
          }}
        />
        <YouTubeIcon
          fontSize={"large"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#2491DF",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1em",
          fontSize: { xs: "0.8em", md: "1.1em" },
        }}
      >
        <Box
          sx={{
            "&:hover": {
              color: "#14A800",
              cursor: "pointer",
            },
          }}
        >
          Stolen Cars
        </Box>
        <Box
          sx={{
            "&:hover": {
              color: "#14A800",
              cursor: "pointer",
            },
          }}
        >
          Recovered Cars
        </Box>
        <Box
          sx={{
            "&:hover": {
              color: "#14A800",
              cursor: "pointer",
            },
          }}
        >
          Blog
        </Box>
        <Box
          sx={{
            "&:hover": {
              color: "#14A800",
              cursor: "pointer",
            },
          }}
        >
          Contact
        </Box>
      </Box>

      <Box
        sx={{
          fontSize: { xs: "0.8em", md: "1.1em" },

          "&:hover": {
            color: "#14A800",
            cursor: "pointer",
          },
        }}
      >
        © 2022 Okereke Chinweotito{" "}
      </Box>
    </Grid>
  );
}

export default Footer;
