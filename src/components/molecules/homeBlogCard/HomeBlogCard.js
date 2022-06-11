import React from "react";
import "./homeBlogCard.css";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";

function HomeBlogCard({ date, title, src }) {
  return (
    <div className="col-lg-4">
      <FadeIn>
        <div className="post-box">
          <div className="post-img" style={{ height: "300px" }}>
            <img
              style={{ objectFit: "cover" }}
              src={src}
              className="img-fluid"
              alt=""
            />
          </div>
          <span className="post-date">{date}</span>
          <h3 className="post-title">{title}</h3>
        </div>
      </FadeIn>
    </div>
  );
}

export default HomeBlogCard;
