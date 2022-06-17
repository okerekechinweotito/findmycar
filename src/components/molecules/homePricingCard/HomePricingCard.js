import React from "react";
import "./homePricingCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";
function HomePricingCard({
  plan,
  amount,
  src,
  styles,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  icon,
  icon2,
  icon3,
}) {
  return (
    <div className="col-lg-3 col-md-6 ">
      <FadeIn>
        <div className="pricing-box">
          <span className="featured">Featured</span>
          <h3 style={styles}>{plan}</h3>
          <div className="price">
            <sup>₦</sup>
            {amount}
            <span> / mo</span>
          </div>
          <img src={src} className="img-fluid" alt="hub" />
          <ul
            style={{
              textAlign: "justify",
              margin: "0 0 1em 1em",
            }}
          >
            <li>
              {benefit1} &nbsp;{" "}
              <CheckCircleIcon
                color="success"
                sx={{
                  position: "absolute",
                  right: "1em",
                }}
              />
            </li>
            <li>
              {benefit2} &nbsp; {icon}
            </li>
            <li>
              {benefit3} &nbsp; {icon2}
            </li>

            <li>
              {benefit4} &nbsp; {icon3}
            </li>
          </ul>
          <a
            href="#contact"
            className="btn-buy"
            style={{ textDecoration: "none" }}
          >
            Buy Now
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

export default HomePricingCard;
