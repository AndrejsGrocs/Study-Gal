import React from "react";
import InstructorNav from "../InstructorNav/InstructorNav";
import InstructorCards from "../../views/Instructor/InstructorCards";
import data from "../../components/Data/Data";
import MobileDeviceImg from "../../img/mdevice_pic.png";
import GooglePlay from "../../img/Google Play.svg";
import AppStore from "../../img/App Store.svg";

export default function InstructorPage() {
  const { instructorData } = data;

  return (
    <div className="instructor-page-body">
      <InstructorNav />

      <div className="cards-section">
        {instructorData.map((idata) => (
          <InstructorCards key={idata.id} idata={idata} />
        ))}

        <div className="additional-cards">
          <div className="additional-card-1">
            <img className="additional-card-1-img" src={MobileDeviceImg}></img>

            <div className="add-card-1-store-icons-container">
              <h1 className="add-card-1-store-icons-h1">Download App</h1>
              <img
                className="add-card-1-google-play-button-image"
                src={GooglePlay}
              ></img>
              <img
                className="add-card-1-app-store-button-image"
                src={AppStore}
              ></img>
            </div>
          </div>
        </div>

        <div className="additional-card-2">
          

          <div className="add-card-2-content">
            <p className="add-card-2-p-1">Do you have a great idea for the next dashboard tile?</p>
            <p className="add-card-2-p-2">Suggest it in our feature request page.</p>
            <button className="add-card-2-btn">FEATURE REQUESTS</button>
      
          </div>
        </div>
      </div>
    </div>
  );
}
