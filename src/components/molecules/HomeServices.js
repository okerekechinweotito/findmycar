import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HomeHeading from "../atoms/HomeHeading.js";
import ServiceCard from "../atoms/HomeServiceCard";

export default function Services() {
  return (
    <>
      <Container
        sx={{
          mt: 10,
        }}
      >
        <HomeHeading name="Our Services" />
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
