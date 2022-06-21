import React from "react";
import Button from "@mui/material/Button";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import BeenhereIcon from "@mui/icons-material/Beenhere";
function HomeButton({ style, text, handleOpen }) {
  return (
    <Button
      onClick={() => handleOpen()}
      endIcon={<BeenhereIcon />}
      style={style}
      variant="contained"
      sx={{
        background: "#2491DF",
        fontWeight: "bolder",
        fontFamily: "Mochiy Pop One",
        fontSize: { xs: "small", xl: "medium" },
        transition: "0.5s",

        "&:hover": {
          background: "#14A800",
          transform: "scale(0.9)",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default HomeButton;
