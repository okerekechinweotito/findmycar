import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const styles = {
  card: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const TextCard = ({ icon, title }) => {
  return (
    <>
      <div style={styles.card}>
        <Box
          mt={2}
          component="i"
          sx={{
            fontSize: { xs: "23px", md: "24px" },
            color: "#0a192f",
          }}
        >
          {icon}
        </Box>
        <Typography
          mt={2}
          ml={2}
          variant="h3"
          sx={{
            fontSize: { xs: "18px", md: "21px" },
            fontWeight: "bold",
            color: "#303030",
          }}
        >
          {title}
        </Typography>
      </div>
    </>
  );
};
