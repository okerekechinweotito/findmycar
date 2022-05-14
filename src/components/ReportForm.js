import React, { useState } from "react";
import { Input } from "../components/atoms/Input";
import { Button } from "../components/atoms/Button";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ReportForm(props) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [license, setLicense] = useState("");
  const [VIN, setVIN] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");

  const vehiclesRef = collection(db, "vehicles");

  let navigate = null;

  const addVehicle = async (e) => {
    e.preventDefault();

    await addDoc(vehiclesRef, {
      make: make,
      model: model,
      color: color,
      license: license,
      VIN: VIN,
      location: location,
      img: img,
    }).then(navigate("/safety"));
  };

  return (
    <>
      <form onSubmit={addVehicle}>
        <div className="grid grid-cols-2 gap-3" style={{ color: "#FFA500" }}>
          <Input
            classes="bg-gray-800 border border-green-300"
            type="text"
            placeholder="Make"
            handleChange={(e) => setMake(e.target.value)}
            required="required"
          />
          <Input
            classes="bg-gray-800 border border-green-300"
            type="text"
            placeholder="Model"
            handleChange={(e) => setModel(e.target.value)}
            required="required"
          />
          <Input
            classes="bg-gray-800 border border-green-300"
            type="text"
            placeholder="Color"
            handleChange={(e) => setColor(e.target.value)}
            required="required"
          />
          <Input
            classes="bg-gray-800 border border-green-300"
            type="text"
            placeholder="License"
            handleChange={(e) => setLicense(e.target.value)}
            required="required"
          />
          <Input
            classes="bg-gray-800 border border-green-300"
            type="text"
            placeholder="VIN"
            handleChange={(e) => setVIN(e.target.value)}
            required="required"
          />
          <Input
            classes="bg-gray-800 border border-green-300"
            type="text"
            placeholder="Location"
            handleChange={(e) => setLocation(e.target.value)}
            required="required"
          />

          {/* 
                    <Input 
                        type="file" 
                        placeholder="Image" 
                        handleChange={e => setImg(e.target.value)} 
                        required="required" 
                        text="Upload" />
                    */}
        </div>
        <div className="grid grid-cols-1 gap-3">
          <Button
            classes="bg-green-300 my-5 w-full"
            type="submit"
            text="Submit Your Car Details"
          />
        </div>
      </form>
    </>
  );
}
