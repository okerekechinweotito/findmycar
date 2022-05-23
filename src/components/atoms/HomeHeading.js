import React from "react";
import Typography from "@mui/material/Typography";

export default function HomeHeading({ name }) {
  return (
    <Typography
      variant="h2"
      sx={{
        position: "relative",
        textAlign: "center",
        color: "#0a192f",
        fontWeight: "bold",
        fontSize: { md: 50, xs: 33 },
        mb: 7,

        "&:before": {
          content: "''",
          position: "absolute",
          height: 7,
          width: { md: "20%", xs: "30%" },
          background: "#ff5c00",
          bottom: "0",
          left: { md: "40%", xs: "35%" },
        },
      }}
    >
      {name}
    </Typography>
  );
}
