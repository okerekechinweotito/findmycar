import React from "react";
import { TextCard } from "../atoms/HomeTextCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HomeInfoCard from "../atoms/HomeInfoCard";
import HomeReverseInfoCard from "../atoms/HomeReverseInfoCard";
import visit from "./../../assets/visit.svg";
import investigate from "./../../assets/investigate.svg";
import form from "./../../assets/form.svg";
import HomeHeading from "../atoms/HomeHeading";

export default function Features() {
  return (
    <>
      <Container
        sx={{
          height: "auto",
          my: 3,
          py: 4,
        }}
      >
        <Grid
          container
          spacing={2}
          pb={2}
          mx={"auto"}
          sx={{
            width: "100%",
            justifyContent: "center",
            borderBottom: "2px solid #d1d1d1",
          }}
        >
          <Grid item xs={9} md={4} lg={4}>
            <TextCard
              icon={<i className="fas fa-car-alt"></i>}
              title="200+ Cars Recovered"
            />
          </Grid>
          <Grid item xs={9} md={4} lg={4}>
            <TextCard
              icon={<i className="fas fa-suitcase"></i>}
              title="350+ Cases Reported"
            />
          </Grid>
          <Grid item xs={9} md={4} lg={4}>
            <TextCard
              icon={<i className="fas fa-users"></i>}
              title="180 Happy Clients"
            />
          </Grid>
        </Grid>
      </Container>

      <div style={{ background: "#fafafa" }}>
        <Container
          sx={{
            height: "auto",
            mt: 10,
            py: 5,
          }}
        >
          <HomeHeading name="How It Works" />
          <HomeInfoCard
            img={visit}
            title="Recover your car"
            info=" Visit us at https://findmycar.netlify.app
            to commence your vehicle recovery process"
          />
          <HomeReverseInfoCard
            img={form}
            title="File a report"
            info="Provide the required details on our website to start your vehicle recovery process immediately"
          />
          <HomeInfoCard
            img={investigate}
            title="The police does the rest"
            info="The police takes the neccessary steps to recover your missing vehicle"
          />
        </Container>
      </div>
    </>
  );
}