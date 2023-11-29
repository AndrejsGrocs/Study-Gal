import React from "react";

function InstructorCoursesCards(props) {
  const { icdata } = props;
  return (
    <>
     
      <div className="instructor-courses-card">
        <div className="instructor-card-content">
          <img
            className="instructor-courses-img"
            src={icdata.img_src1}
            alt="instructor-account-avatar-image"
          ></img>
          <h2 className="instructor-courses-card-title">{icdata.title}</h2>
       
              </div>
            </div>

    
    
    
    </>
  );
}

export default InstructorCoursesCards;
