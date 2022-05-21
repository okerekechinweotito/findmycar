import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function InfoCard(props) {
  return (
    <>
      <Grid
        container
        sx={{
          height: { md: 450, xs: "auto" },
          margin: "20px 0",
          padding: "20px 0",
        }}
      >
        {" "}
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{
            height: { md: "100%", xs: 250 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#161c2d",
              fontWeight: "bold",
              fontSize: { md: "35px", xs: "25px" },
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="p"
            mt={2}
            sx={{
              width: "80%",
              fontSize: { md: "18px", xs: "15px" },
              fontWeight: 500,
              textAlign: "center",
              color: "#464646",
            }}
          >
            {props.info}
          </Typography>
          <Button variant="contained" disableElevation className="hero_btn">
            Recover
          </Button>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{
            height: { md: "100%", xs: 300 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ height: "100%" }} src={props.img} alt="visit us" />
        </Grid>
      </Grid>
    </>
  );
}
