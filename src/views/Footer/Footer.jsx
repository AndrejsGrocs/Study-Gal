import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../img/logo_no_text_light.png";
import FooterLogoLight from "../../img/logo_no_text_black.png";
import reactLogo from "../../img/react_logo.png";
import ScrollToTop from "./../../components/ScrollToTop/ScrollToTopComponent";

export default function Footer() {
  return (
    <>
      <div className="footer-body">
        <div className="footer-container">
          <div className="footer-card">
            <h1 className="footer-card-h1">START A PROJECT</h1>
            <p className="footer-card-text">We are ready for the challenge</p>
            <p className="footer-card-text">project@studygal.com</p>
          </div>

          <div className="footer-card">
            <h1 className="footer-card-h1">SAY HELLO</h1>
            <p className="footer-card-text">
              497 Regensburg St. Regensburg, 93049
            </p>
            <p className="footer-card-text">+49 999 999 999</p>
          </div>

          <div className="footer-card">
            <h1 className="footer-card-h1">JOBS</h1>
            <p className="footer-card-text">We are always looking for talent</p>
            <p className="footer-card-text">jobs@studygal.com</p>

           
          </div>
          <div className="footer-logo-section">
              <a
                className="react-logo-container"
                href="https://legacy.reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="react-logo"
                  src={reactLogo}
                  alt="react animated logo"
                />
              </a>

              <Link to="/" activeclassname="active" className="a-link">
                <ScrollToTop />

                <img className="footer-logo" src={FooterLogo}></img>
                <img className="footer-logo-light" src={FooterLogoLight}></img>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
}
