import React from "react";
import Typography from "@mui/material/Typography";

export default function HomeHeading({ name, color }) {
  return (
    <Typography
      variant="h2"
      sx={{
        position: "relative",
        textAlign: "center",
        color: { color },
        fontWeight: "bold",
        fontSize: { md: 40, xs: 30 },
        fontFamily: "Mochiy Pop One ",
        mb: 7,
      }}
    >
      {name}
    </Typography>
  );
}
