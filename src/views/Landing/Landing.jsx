import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import Footer from "../Footer/Footer";
import InstructorPage from "../Instructor/Instructor-page";
import Navbar from "../NavBar/Navbar";

export default function Landing() {
  return (
    <>
      <div>
      
        <div className="landing-body">
          <h1 className="lp-h1">Study Gal Landing</h1>



          


        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
