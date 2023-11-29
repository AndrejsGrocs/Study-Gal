import React from "react";
import DeleteButton from '../../img/Buttons_Elements/delete_small.png'
import Delete from '../../../src/App'

function InstructorCoursesCards(props) {


  const { icdata } = props;
  return (
    <>

    
     
      <div className="instructor-courses-card">
        <div className="instructor-courses-card-content">      
          <img
            className="instructor-courses-img"
            src={icdata.img_src1}
            alt="instructor-account-avatar-image"
          ></img>
          <h2 className="instructor-courses-card-title">{icdata.title}</h2>
          <div className="courses-cards-buttons">
          <button className="update-button">Update</button>
       
       <img  className="delete_button" src={DeleteButton} onClick={Delete}/>

          </div>
        

          

          
       
       
              </div>
            </div>

    
    
    
    </>
  );
}

export default InstructorCoursesCards;
