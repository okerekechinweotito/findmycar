import React from "react";
import Button from "@mui/material/Button";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
function HomeButton({ style, text }) {
  return (
    <Link component={RouterLink} to="/report">
      <Button
        endIcon={<DirectionsCarIcon />}
        style={style}
        variant="contained"
        sx={{
          background: "#2491DF",
          fontWeight: "bolder",
          fontFamily: "Rubik Wet Paint",
          fontSize: { xs: "small", xl: "large" },
          transition: "0.5s",

          "&:hover": {
            background: "#14A800",
            transform: "scale(0.9)",
          },
        }}
      >
        {text}
      </Button>
    </Link>
  );
}

export default HomeButton;
