import { Box, Grid } from "@mui/material";
import React from "react";
import { FadeIn } from "../components/utils/FadeInAnimation";
import ScrollToTop from "../components/utils/ScrollToTop";
import CarCard from "../components/molecules/carCard/CarCard";
import car1 from "../assets/stolenCars/car-1.webp";
import car2 from "../assets/stolenCars/car-2.webp";
import car3 from "../assets/stolenCars/car-3.webp";
import car4 from "../assets/stolenCars/car-4.webp";
import car5 from "../assets/stolenCars/car-5.webp";
import car6 from "../assets/stolenCars/car-6.webp";

function StolenCars() {
  /*  const [cars, setCars] = React.useState([]);

  const mapCars = cars.map((car) => {
    return (
      <CarCard
        key={car.title}
        carImageLink={car1}
        carNameModel={`Toyota RAV4`}
        carYear={`2021`}
        carColor={`Blue`}
        carPlateNumber={`ABJ-234-2P`}
        carEngineNumber={`842-3234-2512`}
        carTinted={`Tinted Glass`}
        carSeater={`4 Seater Vehicle`}
        locationOfTheft={`Owerri`}
        dateOfReport={`21 June 2022`}
      />
    );
  });

  React.useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((response) => {
        setCars(response);
      });
  }, []); */

  return (
    <Grid
      id="database"
      sx={{
        width: "100vw",
        margin: "5em 0 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollToTop />
      <section id="services" className="services">
        <div className="container ">
          <FadeIn>
            <header className="section-header">
              <p className="">Recently Stolen Vehicles</p>
              <h2 style={{ marginTop: "1em" }}>
                Contact us or the nearest police station if you see any of the
                below listed vehicles
              </h2>
            </header>
          </FadeIn>
          <Box
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "2em",
              marginTop: "2em",
            }}
          >
            <CarCard
              carImageLink={car1}
              carNameModel={`Toyota Matrix`}
              carYear={`2004`}
              carColor={`Silver`}
              carPlateNumber={`JJJ-392GU`}
              carEngineNumber={`5GZEV337X7J`}
              carTinted={`Normal Glass `}
              carSeater={`4 Seater Vehicle`}
              locationOfTheft={`Orji, Owerri`}
              dateOfReport={`13 September 2022`}
            />

            <CarCard
              carImageLink={car2}
              carNameModel={`Lexus ES 350`}
              carYear={`2008`}
              carColor={`White`}
              carPlateNumber={`GWA-762BS`}
              carEngineNumber={`4TISK2E7RU4`}
              carTinted={`Tinted Glass`}
              carSeater={`4 Seater Vehicle`}
              locationOfTheft={`MCC, Owerri`}
              dateOfReport={`11th September 2022`}
            />
            <CarCard
              carImageLink={car3}
              carNameModel={`Toyota Camry`}
              carYear={`2008`}
              carColor={`Black`}
              carPlateNumber={`ABC-186D0D`}
              carEngineNumber={`2CNBJ134146`}
              carTinted={`Normal Glass`}
              carSeater={`4 Seater Vehicle`}
              locationOfTheft={`Orji, Owerri`}
              dateOfReport={`1st September 2022`}
            />

            <CarCard
              carImageLink={car4}
              carNameModel={`Lexus IS 250`}
              carYear={`2009`}
              carColor={`Silver`}
              carPlateNumber={`KUJ-731BH`}
              carEngineNumber={`4KLB4J1N29J`}
              carTinted={`Tinted Glass`}
              carSeater={`4 Seater Vehicle`}
              locationOfTheft={`Okwu, Owerri`}
              dateOfReport={`29th August 2022`}
            />
            <CarCard
              carImageLink={car5}
              carNameModel={`Toyota RAV4`}
              carYear={`2021`}
              carColor={`Blue`}
              carPlateNumber={`ABC-644LK`}
              carEngineNumber={`JH4DC4350SS`}
              carTinted={`Normal Glass`}
              carSeater={`4 Seater Vehicle`}
              locationOfTheft={`Control, Owerri`}
              dateOfReport={`20th August 2022`}
            />
            <CarCard
              carImageLink={car6}
              carNameModel={`Toyota RAV4`}
              carYear={`2021`}
              carColor={`Blue`}
              carPlateNumber={`ABJ-234-2P`}
              carEngineNumber={`1GNDT13W5R2`}
              carTinted={`Tinted Glass`}
              carSeater={`4 Seater Vehicle`}
              locationOfTheft={`Aladimma, Owerri`}
              dateOfReport={`10th August 2022`}
            />
          </Box>
        </div>
      </section>
    </Grid>
  );
}

export default StolenCars;
