import React from "react";
import { Link } from "react-scroll";
import "./index.scss";
import Logo from "../../assets/imageComponents/logo";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu">
          <Link className="link" activeClass="active" to="home" smooth spy offset={-101} duration={300}>
            home
          </Link>
          <Link className="link" activeClass="active" to="about" smooth spy offset={-99} duration={300}>
            about us
          </Link>
          <Link className="link" activeClass="active" to="services" smooth spy offset={-98} duration={300}>
            services
          </Link>
          <Link className="link" activeClass="active" to="projects" smooth spy offset={-100} duration={300}>
            projects
          </Link>
          <Link className="link" activeClass="active" to="contacts" smooth spy offset={-100} duration={300}>
            contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
