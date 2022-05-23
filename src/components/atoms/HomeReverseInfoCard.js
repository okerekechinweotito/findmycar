import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function InfoCard(props) {
  return (
    <>
      <Container
        sx={{
          height: { md: 450, xs: "auto" },
          margin: "20px 0",
          padding: "20px 0",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
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
          <Button
            variant="contained"
            disableElevation
            sx={{
              background: "#fa772b",
              color: "#fff",
              fontWeight: "bold",
              padding: "5px 35px",
              marginTop: "20px",

              "&:hover": {
                background: "#ff5c00",
              },
            }}
          >
            Recover
          </Button>
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
