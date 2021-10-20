import React from "react";
import Dots from "shared/Dots";
import AOS from "aos";
import ceberSecurity from "assets/images/cyberSecurity.svg";
import devOps from "assets/images/devOps.svg";
import qa from "assets/images/qa.svg";
import "aos/dist/aos.css";
import "./index.scss";

const CardContent = ({ title, logo, titleHover, text }) => {
  return (
    <>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-logo">{logo}</div>
      </div>
      <div className="card-content-hover">
        <div className="card-title">{titleHover}</div>
        <div className="card-text">{text}</div>
        <Dots className="dots" />
      </div>
    </>
  );
};

const Services = () => {
  AOS.init();
  const title = "services";
  return (
    <div className={`${title}-wrapper`} id={title}>
      <div className={title}>
        <div className="under-title">
          {title}
          <div className="title">{title}</div>
        </div>
        <Dots />
        <div className="card-box">
          <div className="card" data-aos="fade-down">
            <CardContent
              title="Dev Ops"
              logo={<img src={devOps} alt="" className="card-logo-image" />}
              titleHover="DEV OPS"
              text="test IO has been recognized by numerous organizations as a leading crowdtesting vendor, changing the way cutting-edge software teams approach QA."
            />
          </div>
          <div className="card" data-aos="zoom-in">
            <CardContent
              title="QA"
              logo={<img src={qa} alt="" className="card-logo-image" />}
              titleHover="Quality gets around"
              text="test IO has been recognized by numerous organizations as a leading crowdtesting vendor, changing the way cutting-edge software teams approach QA."
            />
          </div>
          <div className="card" data-aos="fade-up">
            <CardContent
              title="Security "
              logo={<img src={ceberSecurity} alt="" className="card-logo-image" />}
              titleHover="Quality gets around"
              text="test IO has been recognized by numerous organizations as a leading crowdtesting vendor, changing the way cutting-edge software teams approach QA."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
