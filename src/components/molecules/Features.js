import React from "react";
import { TextCard } from "../atoms/TextCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoCard from "../atoms/InfoCard";
import ReverseInfoCard from "../atoms/ReverseInfoCard";
import visit from "./../../assets/visit.svg";
import investigate from "./../../assets/investigate.svg";
import form from "./../../assets/form.svg";

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
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid item xs={9} md={4} lg={4}>
            <TextCard
              icon={<i className="fas fa-car-alt"></i>}
              title="150+"
              info="Cars recovered"
            />
          </Grid>
          <Grid item xs={9} md={4} lg={4}>
            <TextCard
              icon={<i className="fas fa-users"></i>}
              title="205"
              info="Happy clients"
            />
          </Grid>
          <Grid item xs={9} md={4} lg={4}>
            <TextCard
              icon={<i className="fas fa-briefcase"></i>}
              title="329+"
              info="Cases"
            />
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          height: "auto",
          mt: 15,
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
            mb: 7,

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
          How it works
        </Typography>
        <InfoCard
          img={visit}
          title="Recover your car"
          info=" Visit us at https://findmycar.netlify.app
            to commence your vehicle recovery process"
        />
        <ReverseInfoCard
          img={form}
          title="File a report"
          info="Provide the required details on our website to start your vehicle recovery process immediately"
        />
        <InfoCard
          img={investigate}
          title="The police does the rest"
          info="The police takes the neccessary steps to recover your missing vehicle"
        />
      </Container>
    </>
  );
}
