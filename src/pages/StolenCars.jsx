import { Box, Grid } from "@mui/material";
import React from "react";
import { FadeIn } from "../components/helperFunctions/FadeInAnimation";
import ScrollToTop from "../components/helperFunctions/ScrollToTop";
import CarCard from "../components/molecules/carCard/CarCard";
import car1 from "../assets/stolenCars/car-1.jpg";
import car2 from "../assets/stolenCars/car-2.jpg";
import car3 from "../assets/stolenCars/car-3.jpg";
import car4 from "../assets/stolenCars/car-4.jpg";
import car5 from "../assets/stolenCars/car-5.jpg";
import car6 from "../assets/stolenCars/car-6.jpg";

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
    fetch(" https://jsonplaceholder.typicode.com/todos/")
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

            <CarCard
              carImageLink={car2}
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
            <CarCard
              carImageLink={car3}
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
            <CarCard
              carImageLink={car4}
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
            <CarCard
              carImageLink={car5}
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
            <CarCard
              carImageLink={car6}
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
          </Box>
        </div>
      </section>
    </Grid>
  );
}

export default StolenCars;
