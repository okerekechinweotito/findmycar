import React from "react";
import "./backToTopButton.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
function BackToTopButton() {
  return (
    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center active"
    >
      <i>
        {" "}
        <ArrowCircleUpIcon />{" "}
      </i>
    </a>
  );
}

export default BackToTopButton;
