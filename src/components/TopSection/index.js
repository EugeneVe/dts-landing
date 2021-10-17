import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-scroll";
import ArrowDown from "../../assets/images/arrowDown.svg";
import MainIllustration from "../../assets/imageComponents/mainIllustration";
import "./index.scss";

const TopSection = () => {
  // const [burger, setBurger] = useState(false);
  // const isBurger = () => setBurger(!burger);

  return (
    <div className="top-section-wrapper" id="home">
      <div className="top-section">
        <div className="middle">
          <div className="left-side">
            <div className="company-name">Deep Thought Solutions</div>
            <div className="company-slogan">
              <TextField
                autoFocus
                name="terminal"
                placeholder="101010_"
                className="terminal"
                // onFocus={(e) => {
                //   isBurger();
                //   e.target.value = "";
                // }}
              />
              {/* <p className={`slogan-text ${burger ? "hide" : burger}`}>
                101010<span className="cursor">_</span>
              </p> */}
            </div>
          </div>
          <div className="right-side">
            <MainIllustration className="main-illustration" />
          </div>
        </div>
        <div className="arrow-down">
          <Link className="link" activeClass="active" to="about" smooth spy offset={-99} duration={300}>
            <img src={ArrowDown} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
