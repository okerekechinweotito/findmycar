import { Box, Grid } from "@mui/material";
import React from "react";
import { FadeIn } from "../components/utils/FadeInAnimation";
import ScrollToTop from "../components/utils/ScrollToTop";
import CarCard from "../components/molecules/carCard/CarCard";
import { database } from "../firebase/config";
import { onValue, ref as ref_database } from "firebase/database";

function StolenCars() {
  const [data, setData] = React.useState();
  const fetchData = () => {
    const databaseRef = ref_database(database, `carDetails`);
    onValue(databaseRef, (snapshot) => {
      const dataObject = snapshot.val();

      const data = Object.keys(dataObject).map((key) => {
        return dataObject[key];
      });
      setData(data);
      console.log(data);
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
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
            {data?.map((car) => {
              return (
                <CarCard
                  key={car.id}
                  carImageLink={car.imageLink}
                  carNameModel={car.name}
                  carYear={car.year}
                  carColor={car.color}
                  carPlateNumber={car.plateNumber}
                  carEngineNumber={car.engineNumber}
                  carTinted={car.glass}
                  carSeater={car.seater}
                  locationOfTheft={car.location}
                  dateOfReport={car.date}
                />
              );
            })}
          </Box>
        </div>
      </section>
    </Grid>
  );
}

export default StolenCars;
