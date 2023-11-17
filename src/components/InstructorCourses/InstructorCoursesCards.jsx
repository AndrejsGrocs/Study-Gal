import React from "react";

function InstructorCoursesCards(props) {
  const { icdata } = props;
  return (
    <>
     
      <div className="instructor-card1">
        <div className="instructor-card-content">
          <img
            className="instructor-courses-img"
            src={icdata.img_src1}
            alt="instructor-account-avatar-image"
          ></img>
          <h2 className="instructor-card-title di">{icdata.title}</h2>
       
              </div>
            </div>

    
    
    
    </>
  );
}

export default InstructorCoursesCards;
