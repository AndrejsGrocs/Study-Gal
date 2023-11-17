import React from "react";
import InstructorNav from "../InstructorNav/InstructorNav";
import InstructorCards from "../../views/Instructor/InstructorCards";
import data from "../../components/Data/Data";
import userslist from "../../components/Data/UserlistData";
import MobileDeviceImg from "../../img/mdevice_pic.png";
import GooglePlayDark from '../../img/Google Play.png'
import GooglePlayLight from '../../img/google-play.png'
import AppStoreDark from '../../img/App Store.png'
import AppStoreLight from '../../img/app-tore.png'
import InstructorUserlistCard from "./InstructorUserlistCard";
import InstructorUserListComponent from "./InstructorUserListComponent";

export default function InstructorPage() {
  const { instructorData, users } = data;
  
  const {  usersList} = userslist;

  return (
    <div className="instructor-page-body">
      <InstructorNav />

      <div className="cards-section">
        {instructorData.map((idata) => (
          <InstructorCards key={idata.id} idata={idata} />
        ))}

        

   
        <div className="additional-card-0">
          

          <div className="additional-card-0-content">
          <h1 className="instructor-card-title">Recent Subscribers</h1>
          <InstructorUserListComponent />
      
          </div>
        </div>

            

            



        <div className="additional-cards">
          <div className="additional-card-1">
            <img className="additional-card-1-img" src={MobileDeviceImg}></img>

            <div className="add-card-1-store-icons-container">
              <h1 className="add-card-1-store-icons-h1">Download App</h1>
              <img
                className="add-card-1-google-play-button-image-dark icon-card-position"
                src={GooglePlayDark}
              ></img>
              <img
                className="add-card-1-app-store-button-image-dark icon-card-position"
                src={AppStoreDark}
              ></img>

<img
                className="add-card-1-google-play-button-image-light icon-card-position"
                src={GooglePlayLight}
              ></img>
              <img
                className="add-card-1-app-store-button-image-light icon-card-position"
                src={AppStoreLight}
              ></img>
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
    </div>
  );
}
