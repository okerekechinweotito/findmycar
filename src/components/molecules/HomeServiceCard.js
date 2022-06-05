import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ServiceCard(props) {
  return (
    <>
      <Box
        sx={{
          height: { md: 260, xs: 240 },
          margin: "10px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          border: ".1rem solid rgba(0,0,0,.1)",
          borderRadius: ".5rem",
          boxShadow: "0 .5rem 1rem rgba(0,0,0,.1)",
        }}
      >
        <Box
          mt={2}
          component="i"
          sx={{
            fontSize: { xs: "22px", md: "23px" },
            background: "#0a192f",
            color: "#ff5c00",
            padding: "8px 16px",
            borderRadius: "50%",
          }}
        >
          {props.icon}
        </Box>
        <Typography
          variant="h5"
          my={1}
          sx={{
            color: "#130f40",
            fontWeight: "bold",
            fontSize: { md: "20px", xs: "18px" },
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="p"
          sx={{
            width: "90%",
            fontSize: { md: "15px", xs: "14px" },
            color: "#575757",
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
    </>
  );
}
