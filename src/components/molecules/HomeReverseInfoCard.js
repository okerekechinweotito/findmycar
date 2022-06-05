import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeButton from "../atoms/HomeButton";
export default function InfoCard(props) {
  return (
    <>
      <Container
        sx={{
          height: { md: 450, xs: "auto" },
          margin: "20px 0",
          marginTop: { xs: "2em", md: "5em" },
          padding: "20px 0",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
          sx={{
            height: { md: "100%", xs: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: " #FF5C00",
              fontWeight: "bold",
              fontSize: { md: "35px", xs: "25px" },
              fontFamily: "Merriweather",
              mt: { xs: "1em" },
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="p"
            mt={2}
            sx={{
              width: "80%",
              fontSize: { md: "25px", xs: "15px" },
              fontWeight: 500,
              textAlign: "justify",
              color: "#E6E6E6",
              fontFamily: "Mochiy Pop One",
              lineHeight: { xs: "30px", md: "40px" },
            }}
          >
            {props.info}
          </Typography>
          <HomeButton
            text={"Recover"}
            style={{
              padding: "1em 3em",
              margin: "2em 0",
              letterSpacing: "5px",
            }}
          />
        </Box>
        <Box
          sx={{
            height: { md: "100%", xs: 300 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ height: "100%" }} src={props.img} alt="visit us" />
        </Box>
      </Container>
    </>
  );
}
