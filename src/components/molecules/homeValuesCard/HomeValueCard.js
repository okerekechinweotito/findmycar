import React from "react";
import "./HomeValueCard.css";

function HomeValueCard({ src, title, description }) {
  return (
    <div className="col-lg-4 mt-4 mt-lg-0 ">
      <div className="values-box">
        <img src={src} className="img-fluid" alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HomeValueCard;
