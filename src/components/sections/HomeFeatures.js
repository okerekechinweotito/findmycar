import React from "react";
import Container from "@mui/material/Container";
import HomeInfoCard from "../molecules/HomeInfoCard";
import HomeReverseInfoCard from "../molecules/HomeReverseInfoCard";
import visit from "./../../assets/visit.svg";
import investigate from "./../../assets/investigate.svg";
import form from "./../../assets/form.svg";
import HomeHeading from "../atoms/HomeHeading";

export default function Features() {
  return (
    <>
      <div
        style={{
          background: "#222f43",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        }}
      >
        <Container
          sx={{
            height: "auto",
            mt: 10,
            py: 5,
          }}
        >
          <HomeHeading name="How It Works" color={"#FF5C00"} />
          <HomeInfoCard
            img={visit}
            title="Visit our Website"
            info=" Visit findmycar.netlify.app
            to proceed with your vehicle theft report. Our agents are available 24/7 to receive your complaint. The sooner you file a report the higher the chances of recovery"
          />
          <HomeReverseInfoCard
            img={form}
            title="File a report"
            info="File the Vehicle Theft report form and provide the required details. The vehicle details should be as accurate as possible. The more specific and accurate the details are , the higher the chances of recovery"
          />
          <HomeInfoCard
            img={investigate}
            title="The police does the rest"
            info="Your Vehicle Theft Report would be immediately forwarded to the police and other relevant security agencies in the area. Upon recovery we would contact you through the contact details you made available to us"
          />
        </Container>
      </div>
    </>
  );
}
