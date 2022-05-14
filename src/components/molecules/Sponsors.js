import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import force from "./../../assets/police.webp";

export default function Sponsors() {
  return (
    <>
      <Container
        sx={{
          height: "auto",
          marginTop: 15,
          padding: "10px 0",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            position: "relative",
            textAlign: "center",
            color: "#130f40",
            fontWeight: "bold",
            fontSize: { md: 50, xs: 32 },
            mb: 5,

            "&:before": {
              content: "''",
              position: "absolute",
              height: 7,
              width: { md: "20%", xs: "30%" },
              background: "#ffee80",
              bottom: "0",
              left: { md: "40%", xs: "35%" },
            },
          }}
        >
          Our Sponsors
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid item md={3} xs={6}>
            <img src={force} alt="force" />
          </Grid>
          <Grid item md={3} xs={6}>
            <img src={force} alt="force" />
          </Grid>
          <Grid item md={3} xs={6}>
            <img src={force} alt="force" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
