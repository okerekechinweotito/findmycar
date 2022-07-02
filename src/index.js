import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globalStyles/custom.css";
import "./globalStyles/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
