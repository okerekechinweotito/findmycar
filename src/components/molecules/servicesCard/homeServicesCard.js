import React from "react";
import { FadeIn } from "../../utils/FadeInAnimation";
import "./HomeServicesCard.css";

function HomeServicesCard({ borderBottomColor, title, description, icon }) {
  let className = `service-box ${borderBottomColor}`;
  return (
    <div className="col-lg-4 col-md-6">
      <FadeIn>
        <div className={className} id="go">
          <i className="icon"> {icon}</i>

          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </FadeIn>
    </div>
  );
}
export default HomeServicesCard;
