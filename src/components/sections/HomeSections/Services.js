import React from "react";
import HomeServicesCard from "../../molecules/homeServicesCard/homeServicesCard";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container ">
        <FadeIn>
          <header className="section-header">
            <h2>Services</h2>
            <p className="">
              We Provide a Wide Variety of Vehicle Security Services
            </p>
          </header>
        </FadeIn>

        <div className="row gy-4">
          <HomeServicesCard
            borderBottomColor={"blue"}
            icon={<AirportShuttleIcon />}
            title={"Tracker Installation"}
            description={
              "We provide Car GPS Installation services at affordable rate. GPS units provide a handy way for vehicle owners like you to keep track of their vehicles at all times"
            }
          />

          <HomeServicesCard
            borderBottomColor={"orange"}
            icon={<AirportShuttleIcon />}
            title={"Tracker Installation"}
            description={
              "We provide Car GPS Installation services at affordable rate. GPS units provide a handy way for vehicle owners like you to keep track of their vehicles at all times"
            }
          />

          <HomeServicesCard
            borderBottomColor={"green"}
            icon={<AirportShuttleIcon />}
            title={"Tracker Installation"}
            description={
              "We provide Car GPS Installation services at affordable rate. GPS units provide a handy way for vehicle owners like you to keep track of their vehicles at all times"
            }
          />
          <HomeServicesCard
            borderBottomColor={"red"}
            icon={<AirportShuttleIcon />}
            title={"Tracker Installation"}
            description={
              "We provide Car GPS Installation services at affordable rate. GPS units provide a handy way for vehicle owners like you to keep track of their vehicles at all times"
            }
          />

          <HomeServicesCard
            borderBottomColor={"purple"}
            icon={<AirportShuttleIcon />}
            title={"Tracker Installation"}
            description={
              "We provide Car GPS Installation services at affordable rate. GPS units provide a handy way for vehicle owners like you to keep track of their vehicles at all times"
            }
          />

          <HomeServicesCard
            borderBottomColor={"pink"}
            icon={<AirportShuttleIcon />}
            title={"Tracker Installation"}
            description={
              "We provide Car GPS Installation services at affordable rate. GPS units provide a handy way for vehicle owners like you to keep track of their vehicles at all times"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
