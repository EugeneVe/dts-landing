import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
import Logo from "assets/imageComponents/logo";
import "./index.scss";

const Links = () => {
  return (
    <>
      <Link className="link" activeClass="active" to="home" smooth spy offset={-101} duration={300}>
        home
      </Link>
      <Link className="link" activeClass="active" to="about" smooth spy offset={-59} duration={300}>
        about us
      </Link>
      <Link className="link" activeClass="active" to="services" smooth spy offset={-58} duration={300}>
        services
      </Link>
      <Link className="link" activeClass="active" to="projects" smooth spy offset={-55} duration={300}>
        projects
      </Link>
      <Link className="link" activeClass="active" to="contacts" smooth spy offset={-50} duration={300}>
        contacts
      </Link>
    </>
  );
};

const Header = () => {
  const [burger, setBurger] = useState(false);
  const isBurger = () => setBurger(!burger);
  const headerWrapper = useRef(null);
  const header = useRef(null);
  onscroll = function changeHeaderColor() {
    window.scrollY >= 50
      ? headerWrapper.current.classList.add("active")
      : headerWrapper.current.classList.remove("active");
    window.scrollY >= 50 ? header.current.classList.add("active") : header.current.classList.remove("active");
  };
  return (
    <div className="header-wrapper" ref={headerWrapper}>
      <div className="header" ref={header}>
        <div className="logo-wrapper">
          <Logo className="logo" />
        </div>
        <div className="menu">
          <Links />
        </div>
        <Button disableRipple onClick={() => isBurger()} className="burger-button">
          <div className={`burger ${burger ? "active" : ""}`} />
        </Button>
        <div className={`burger-menu ${burger ? "open" : ""}`}>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Header;
