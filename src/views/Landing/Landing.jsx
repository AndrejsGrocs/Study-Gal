import React from "react";

import Footer from "../Footer/Footer";
import Illustartion1 from '../../img/Study Gal Characters1.png'
import LandingSection2 from "./LandingSection2";
import LandingSection3 from "./LandingSection3";
import {ThemeContext, theme, toggleTheme} from "../../App"


export default function Landing(props) {
  return (
    <>
      <div>
      
        <div className="landing-body" 
        // id={theme}
        >
        <div className="landing-text-and-button-container">
        <h1 className="lp-h1">Share your passion and help others to grow</h1>
          <button className="sign-up-for-free-button">SIGN UP FOR FREE</button>

        </div>
    
          <div className="illustration-container">
          <img className="landing-illustration-1" src={Illustartion1}></img>

          </div>

          
          



          


        </div>
        <LandingSection2/>
        <LandingSection3/>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
