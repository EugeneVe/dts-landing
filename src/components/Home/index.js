import React from "react";
import { TextField } from "@mui/material";
import { Link } from "react-scroll";
import ArrowDown from "../../assets/images/arrowDown.svg";
import MainIllustration from "../../assets/imageComponents/mainIllustration";
import "./index.scss";

const Home = () => {
  return (
    <div className="home-wrapper" id="home">
      <div className="home">
        <div className="middle">
          <div className="left-side">
            <div className="company-name">Deep Thought Solutions</div>
            <div className="company-slogan">
              <p className="slogan-text">
                101010<span className="cursor">_</span>
              </p>
              <TextField autoFocus className="terminal" />
            </div>
          </div>
          <div className="right-side">
            <MainIllustration className="main-illustration" />
          </div>
        </div>
        <div className="arrow-down">
          <Link className="link" activeClass="active" to="about" smooth spy offset={-59} duration={300}>
            <img src={ArrowDown} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
