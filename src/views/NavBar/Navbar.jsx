import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoimg from "../../img/logo.svg";
import logoimgLight from "../../img/logolight.svg";

import ColorModeSwitch from "../../components/ColorModeSwitch/ColorModeSwitch";

export default function Navbar(props) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="nav">
        <div className="logo-section">
          <a className="company-logo" href="/">
            {<img className="nav-logo-img" src={logoimg} alt="logo"></img>}
            {
              <img
                className="nav-logo-img-light"
                src={logoimgLight}
                alt="logo"
              ></img>
            }
          </a>
        </div>
        <ul className="nav-list">
          <div class="wrapper">
            {/* <ColorModeSwitch onChange={toggleTheme} checked={theme ==='dark'}/> */}
          </div>

          <div></div>

          <div className="navbar-button-section">
            {
              <>
                {/* <li><Link to='/' activeclassname='active' className='nav-link'> Home</Link></li>
            <li><Link to='/instructor-dashboard' activeclassname='active' className='nav-link'>Instructor</Link></li> */}
            <div >
                  <Link
                    to="/"
                    activeclassname="active"
                    className="nav-link">
                    <button className="landing-btn-login">HOME</button>
                  
             
                  </Link>
                </div>


                <div >
                  <Link
                    to="/login-page"
                    activeclassname="active"
                    className="nav-link">
                    <button className="landing-btn-login">LOGIN</button>
                  
             
                  </Link>
                </div>
                <div >
                  <Link
                    to="/signup-page"
                    activeclassname="active"
                    className="nav-link">
                    <button className="landing-btn-login">SIGN UP</button>
                  
                    
                  </Link>
                </div>
                <div >
                  <Link
                    to="/instructor-dashboard"
                    activeclassname="active"
                    className="nav-link">
                    <button className="landing-btn-login">DASHBOARD</button>
                  
                    
                  </Link>
                </div>
              </>
            }
          </div>
        </ul>
      </div>
    </>
  );
}
