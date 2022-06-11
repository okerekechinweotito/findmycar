import React from "react";
import Button from "@mui/material/Button";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
function HomeButton({ style, text }) {
  return (
    <Button
      endIcon={<DirectionsCarIcon />}
      style={style}
      variant="contained"
      sx={{
        background: "#306844",
        fontWeight: "bolder",
        fontFamily: "Rubik Wet Paint",
        fontSize: { xs: "small", xl: "large" },
        transition: "0.5s",

        "&:hover": {
          background: "#182c25",
          transform: "scale(0.9)",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default HomeButton;
