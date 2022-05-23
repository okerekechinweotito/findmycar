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
        background: "#182c25",
        fontWeight: "bolder",
        fontFamily: "Rubik Wet Paint",
        fontSize: { xs: "small", xl: "large" },
        transition: "1s",

        "&:hover": {
          background: "#306844",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default HomeButton;
