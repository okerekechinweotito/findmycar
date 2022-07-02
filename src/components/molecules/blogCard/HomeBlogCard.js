import React from "react";
import "./homeBlogCard.css";
import { FadeIn } from "../../helperFunctions/FadeInAnimation";

function HomeBlogCard({ date, title, src, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="col-lg-4"
      id="blogLink"
    >
      <FadeIn>
        <div className="post-box">
          <div className="post-img" style={{ height: "300px" }}>
            <img
              style={{ objectFit: "cover", width: "100%" }}
              src={src}
              className="img-fluid"
              alt=""
            />
          </div>
          <span className="post-date">{date}</span>
          <h3 className="post-title">{title}</h3>
        </div>
      </FadeIn>
    </a>
  );
}

export default HomeBlogCard;
