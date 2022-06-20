import React from "react";
import "./tips.css";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { FadeIn } from "../../../helperFunctions/FadeInAnimation";
import tipsImage from "../../../../assets/tipsImage.svg";
function Tips() {
  return (
    <section id="features" className="features">
      <FadeIn>
        <div className="container ">
          <div className="row feture-tabs ">
            <div className="col-lg-6">
              <h3>
                Here are some crucial vehicle Tips that would help reduce RISK
                of theft
              </h3>

              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1">
                  <p>
                    Whether an old vehicle or when you buy a new vehicle, its a
                    great thing to protect yourself from the threat of theft and
                    get peace of mind that you’ll be able to recover it if it’s
                    ever stolen. Below are some useful tips
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Install a steering wheel lock</h4>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <i>
                      {" "}
                      <DoneOutlinedIcon color="success" />{" "}
                    </i>
                    <h4>Always close your car windows after use</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Install a Tracking System.</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Always lock your car doors after use</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Install a Car Alarm</h4>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Never leave your valuables in a car</h4>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <i>
                      <DoneOutlinedIcon color="success" />
                    </i>
                    <h4>Install a Gear Lock</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img src={tipsImage} className="img-fluid" alt="" id="tipsImg" />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Tips;
