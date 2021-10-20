import React from "react";
import instagram from "assets/images/instagram.svg";
import twitter from "assets/images/twitter.svg";
import facebook from "assets/images/facebook.svg";
import telegram from "assets/images/telegram.svg";
import "./index.scss";

const Footer = () => {
  const title = "footer";
  return (
    <div className={`${title}-wrapper`} id={title}>
      <div className={title}>
        <div className="left-side">
          <div className="social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img className="social-logo" src={instagram} alt="" />
            </a>
          </div>
          <div className="social">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img className="social-logo" src={twitter} alt="" />
            </a>
          </div>
          <div className="social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img className="social-logo" src={facebook} alt="" />
            </a>
          </div>
          <div className="social">
            <a href="https://web.telegram.org" target="_blank" rel="noreferrer">
              <img className="social-logo" src={telegram} alt="" />
            </a>
          </div>
        </div>
        <div className="middle">
          © <span>{new Date().getFullYear()}</span> Deep Thought Solutions{" "}
        </div>
        <div className="right-side" />
      </div>
    </div>
  );
};

export default Footer;
