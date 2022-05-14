import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const styles = {
  card: {
    borderRadius: "6px",
    height: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f3f3",
  },
};

export const TextCard = (props) => {
  return (
    <>
      <div className="text_card" style={styles.card}>
        <Box
          mt={2}
          component="i"
          sx={{
            fontSize: { xs: "22px", md: "23px" },
            background: "#ffee80",
            padding: "8px 16px",
            borderRadius: "50%",
          }}
        >
          {props.icon}
        </Box>
        <Typography
          mt={1}
          variant="h1"
          sx={{
            fontSize: { xs: "24px", md: "28px" },
            fontWeight: "bold",
            color: "#130f40",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "bold",
            color: "#494949",
            fontSize: { md: "14px", xs: "12px" },
          }}
        >
          {props.info}
        </Typography>
      </div>
    </>
  );
};
