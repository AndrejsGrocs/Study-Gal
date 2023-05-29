import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../img/logo.svg";
import logoimgLight from "../../img/logolight.svg";
import instalogo from "../../img/instagram-logo.png";
import toggleTheme from '../../App'
import theme from '../../App'
import ColorModeSwitch from "../../components/ColorModeSwitch/ColorModeSwitch";



export default function Navbar(props) {
  return (
    <>
      <div className="nav">
        <div className="logo-section">
          <a className="company-logo" href="/">
            {<img className="nav-logo-img" src={logoimg} alt="logo"></img>}
            {<img className="nav-logo-img-light" src={logoimgLight} alt="logo"></img>}
          </a>
        </div>
        <ul className="nav-list">
          <div class="wrapper"  >
    
          <ColorModeSwitch onChange={toggleTheme} checked={theme ==='dark'}/>
          

          
          
          </div>

          <div></div>

          <div className="navbar-button-section">
            {
              <>
                {/* <li><Link to='/' activeclassname='active' className='nav-link'> Home</Link></li>
            <li><Link to='/instructor-dashboard' activeclassname='active' className='nav-link'>Instructor</Link></li> */}
                <button className="landing-btn-login">
                  <Link
                    to="/login-page"
                    activeclassname="active"
                    className="nav-link"
                  >
                    LOGIN
                  </Link>
                </button>
                <button className="landing-btn-signup">
                  <Link
                    to="/signup-page"
                    activeclassname="active"
                    className="nav-link"
                  >
                    SIGN UP
                  </Link>
                </button>
                <button className="landing-btn-signup">
                  <Link
                    to="/instructor-dashboard"
                    activeclassname="active"
                    className="nav-link"
                  >
                    DASHBOARD
                  </Link>
                </button>
              </>
            }
          </div>
        </ul>
      </div>
    </>
  );
}
