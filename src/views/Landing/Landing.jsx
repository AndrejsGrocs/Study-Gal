import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Illustartion1 from '../../img/Study Gal Characters1.png'
import IllustartionLight from '../../img/study-image.png'
import LandingSection2 from "./LandingSection2";
import LandingSection3 from "./LandingSection3";



export default function Landing(props) {
  return (
    <>
      <div className="upper">
      
        <div className="landing-body">

<div className="landing-section-1">




        <div className="landing-text-and-button-container">
        <h1 className="lp-h1">Share your passion and help others to grow</h1>
      
          <Link
                    to="/signup-page"
                    activeclassname="active"
                  
                  > <button className="sign-up-for-free-button">SIGN UP FOR FREE</button>
                  </Link>
                  

        </div>
    
          <div className="illustration-container">
          <img className="landing-illustration-1" src={Illustartion1}></img>
          <img className="landing-illustration-1-light" src={IllustartionLight}></img>

          </div>

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
