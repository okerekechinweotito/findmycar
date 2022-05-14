import React, { useEffect, useState } from "react";
// import FindForm from '../components/FindForm'
import { db } from "../firebase";
// import Card from '../components/atoms/Card'

import { collection, getDocs } from "firebase/firestore";

export default function Find() {
  const [vehicles, setVehicles] = useState([]);
  const [query, setQuery] = useState("");
  const vehiclesRef = collection(db, "vehicles");

  useEffect(() => {
    const getVehicles = async () => {
      const data = await getDocs(vehiclesRef);
      setVehicles(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getVehicles();
  }, []);

  return (
    <>
      <h1>Find Your Vehicle</h1>
      <form>
        <input c onChange type="text" placeholder="License" />
      </form>
    </>
  );
}
