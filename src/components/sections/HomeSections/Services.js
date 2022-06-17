import React from "react";
import HomeServicesCard from "../../molecules/homeServicesCard/homeServicesCard";
import LocalTaxi from "@mui/icons-material/LocalTaxi";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";
import LocationOn from "@mui/icons-material/LocationOn";
import ScreenLockRotation from "@mui/icons-material/ScreenLockRotation";
import SupportAgent from "@mui/icons-material/SupportAgent";
import CarCrash from "@mui/icons-material/CarCrash";
import DirectionsCarFilled from "@mui/icons-material/DirectionsCarFilled";

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
            icon={<DirectionsCarFilled />} 
            title={"Vehicle Recovery"}
            description={
              "We specialize in the recovery of stolen cars and vehicles. The happiness of our clients is of the utmost priority. so we always deliver without excuse"
            }
          />

          <HomeServicesCard
            borderBottomColor={"orange"}
            icon={<ScreenLockRotation />}
            title={"Security Gadgets"}
            description={
              "We provide a range of gadgets and tools that increase the all round security of your vehicle. Tools like an alarm system, remote lock and gear lock"
            }
          />

          <HomeServicesCard
            borderBottomColor={"green"}
            icon={<LocalTaxi />}
            title={"Armed Excorts"}
            description={
              "Your safety and security is our No.1 priority. so on your request we can provide armed excorts to accompany you to whereever you want to secure you and your vehicle"
            }
          />
          <HomeServicesCard
            borderBottomColor={"red"}
            icon={<CarCrash />}
            title={"Vehicle Insurance"}
            description={
              "We patner to some of the best insurance companies to ensure that our clients are put first, get the very best deals and are protected in every possible way"
            }
          />

          <HomeServicesCard
            borderBottomColor={"purple"}
            icon={<LocationOn />}
            title={"Tracker Installation"}
            description={
              "We provide Car GPS Installation services at affordable rate. GPS units provide a handy way for vehicle owners like you to keep track of their vehicles at all times"
            }
          />

          <HomeServicesCard
            borderBottomColor={"pink"}
            icon={<SupportAgent />}
            title={"24/7 Technical Support"}
            description={
              "Our technical team is always avaliable and willing to offer assistance for any difficulty you may encounter. We are just a call or email away"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
