import { Grid } from "@mui/material";
import React from "react";
import { FadeIn } from "../components/helperFunctions/FadeInAnimation";

function StolenCars() {
  return (
    <Grid
      sx={{
        width: "100vw",
        margin: "2em 0 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section id="services" className="services">
        <div className="container ">
          <FadeIn>
            <header className="section-header">
              <h2>DataBase Of Stolen Cars</h2>
              <p className="">
                We Provide a Wide Variety of Vehicle Security Services
              </p>
            </header>
          </FadeIn>
        </div>
      </section>
    </Grid>
  );
}

export default StolenCars;
