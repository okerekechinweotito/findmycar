import React from "react";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";
import HomePricingCard from "../../molecules/pricingCard/HomePricingCard";
import GppBadIcon from "@mui/icons-material/GppBad";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import basicPic from "../../../assets/pricingImage1.svg";
import standardPic from "../../../assets/pricingImage2.svg";
import goldPic from "../../../assets/pricingImage3.svg";
import premiumPic from "../../../assets/pricingImage4.svg";

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <FadeIn>
          <header className="section-header">
            <h2>Our Payment Plans</h2>
            <p>Our Pricing</p>
          </header>
        </FadeIn>

        <div className="row gy-4 ">
          <HomePricingCard
            subscriptionCost={"500000"}
            styles={{ color: "#4DB5A3" }}
            plan={"Basic Plan"}
            amount={"5000"}
            benefit1={"Vehicle Theft Report"}
            benefit2={"24/7 Technical Support"}
            benefit3={"Tracker Installation"}
            benefit4={"Vehicle Insurance"}
            src={basicPic}
            icon={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                }}
              />
            }
            icon2={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                }}
              />
            }
            icon3={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                }}
              />
            }
          />
          <HomePricingCard
            subscriptionCost={"1000000"}
            styles={{ color: "#14A800" }}
            plan={"Standard Plan"}
            amount={"10,000"}
            benefit1={"Vehicle Theft Report"}
            benefit2={"24/7 Technical Support"}
            benefit3={"Tracker Installation"}
            benefit4={"Vehicle Insurance"}
            src={standardPic}
            icon={
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  right: "1em",
                  color: "#2491DF",
                }}
              />
            }
            icon2={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                }}
              />
            }
            icon3={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                }}
              />
            }
          />
          <HomePricingCard
            subscriptionCost={"5000000"}
            styles={{ color: "#FF901C" }}
            plan={"Gold Plan"}
            amount={"50,000"}
            benefit1={"Vehicle Theft Report"}
            benefit2={"24/7 Technical Support"}
            benefit3={"Tracker Installation"}
            benefit4={"Vehicle Insurance"}
            src={goldPic}
            icon={
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  right: "1em",
                  color: "#2491DF",
                }}
              />
            }
            icon2={
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  right: "1em",
                  color: "#2491DF",
                }}
              />
            }
            icon3={
              <GppBadIcon
                sx={{
                  color: "red",
                  position: "absolute",
                  right: "1em",
                }}
              />
            }
          />
          <HomePricingCard
            subscriptionCost={"10000000"}
            styles={{ color: " #B715E0" }}
            plan={"Platinum Plan"}
            amount={"100,000"}
            benefit1={"Vehicle Theft Report"}
            benefit2={"24/7 Technical Support"}
            benefit3={"Tracker Installation"}
            benefit4={"Vehicle Insurance"}
            src={premiumPic}
            icon={
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  right: "1em",
                  color: "#2491DF",
                }}
              />
            }
            icon2={
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  right: "1em",
                  color: "#2491DF",
                }}
              />
            }
            icon3={
              <CheckCircleIcon
                sx={{
                  position: "absolute",
                  right: "1em",
                  color: "#2491DF",
                }}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
