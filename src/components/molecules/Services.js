import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ServiceCard from "./../atoms/ServiceCard";

export default function Services() {
  return (
    <>
      <Container>
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
          Our Services
        </Typography>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item lg={3} md={5} xs={8}>
            <ServiceCard
              title="Car Recovery"
              icon={<i className="fas fa-car-alt"></i>}
              info="We offer the fastest option to recover your stolen vehicles"
            />
          </Grid>
          <Grid item lg={3} md={5} xs={8}>
            <ServiceCard
              title="Car Tracking"
              icon={<i className="fas fa-map-marker-alt"></i>}
              info="The most effecient and effective vehicle tracking system"
            />
          </Grid>
          <Grid item lg={3} md={5} xs={8}>
            <ServiceCard
              title="Car Survellance"
              icon={<i class="fas fa-video"></i>}
              info="State of the art survellance system that lets you monitor your vehicle"
            />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item lg={3} md={5} xs={8}>
            <ServiceCard
              title="Car Insurance"
              icon={<i className="fas fa-car-crash"></i>}
              info="We also offer industry leading insurance packages"
            />
          </Grid>
          <Grid item lg={3} md={5} xs={8}>
            <ServiceCard
              title="Security System Installation"
              icon={<i className="fas fa-shield-alt"></i>}
              info="Our trained personnels can do all the heavy lifting"
            />
          </Grid>
          <Grid item lg={3} md={5} xs={8}>
            <ServiceCard
              title="24/7 Support"
              icon={<i className="fas fa-headset"></i>}
              info="Round the clock support teams"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
