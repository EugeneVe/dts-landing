import React from "react";
import { Tabs } from "@mui/material";
import Dots from "shared/Dots";
import AOS from "aos";
import ProjctsIllustration from "assets/imageComponents/projectsIllustration";
import "aos/dist/aos.css";
import "./index.scss";

const Cards = ({ image, name }) => {
  return (
    <div className="tab-content">
      <div className="side-l">
        <img className="side-l-image" src={image} alt="" />
      </div>
      <div className="side-r">{name}</div>
    </div>
  );
};

const Services = () => {
  AOS.init();
  const title = "projects";

  return (
    <div className={`${title}-wrapper`} id={title}>
      <div className={title}>
        <div className="under-title">
          {title}
          <div className="title">{title}</div>
        </div>
        <Dots />
        <div className="content">
          <div className="left-side">
            <Tabs
              data-aos="fade-right"
              TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
              className="tabs"
              value={0}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              orientation="vertical"
            >
              <Cards
                image="https://img5.goodfon.com/wallpaper/big/b/54/derevnia-domiki-doroga-trava.jpg"
                name="boeing sdfsdf"
              />
              <Cards
                image="https://img5.goodfon.com/wallpaper/big/b/54/derevnia-domiki-doroga-trava.jpg"
                name="boeing"
              />
              <Cards
                image="https://img5.goodfon.com/wallpaper/big/b/54/derevnia-domiki-doroga-trava.jpg"
                name="boeing"
              />
              <Cards
                image="https://img5.goodfon.com/wallpaper/big/b/54/derevnia-domiki-doroga-trava.jpg"
                name="boeing"
              />
              <Cards
                image="https://img5.goodfon.com/wallpaper/big/b/54/derevnia-domiki-doroga-trava.jpg"
                name="boeing"
              />
              <Cards
                image="https://img5.goodfon.com/wallpaper/big/b/54/derevnia-domiki-doroga-trava.jpg"
                name="boeing"
              />
              <Cards
                image="https://img5.goodfon.com/wallpaper/big/b/54/derevnia-domiki-doroga-trava.jpg"
                name="boeing"
              />
            </Tabs>
          </div>
          <div className="right-side" data-aos="fade-up">
            <ProjctsIllustration className="projects-illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
