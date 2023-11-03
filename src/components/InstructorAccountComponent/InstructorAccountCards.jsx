import React from "react";

function InstructorAccountCards(props) {
  const { isntdata } = props;

  return (
    <>
      <div className="instructor-card1">
        <div className="instructor-card-content">
          <img
            className="instructor-account-avatar"
            src={isntdata.instr_img_src}
            alt="instructor-account-avatar-image"
          ></img>
          <h2 className="instructor-card-title di">{isntdata.inst_name}</h2>
          <p className="instructor-card-skills">{isntdata.skills}</p>

          <div className="instructor-personal-account-data-cards">
            <div className="instructor-account-card">
              <div className="instructor-card-content">
                <p className="instructor-card-title d">COURSES </p>
                <p className="instructor-personal-account-card">
                  {isntdata.amount_of_courses}
                </p>
              </div>
            </div>

            <div className="instructor-account-card">
              <div className="instructor-card-content">
                <p className="instructor-card-title d">DOWNLOADABLES</p>
                <p className="instructor-personal-account-card">
                  {isntdata.amount_of_downloadables}
                </p>
              </div>
            </div>

            <div className="instructor-account-card">
              <div className="instructor-card-content">
                <p className="instructor-card-title d" >
                  COACHING SESSIONS BOOKED
                </p>
                <p className="instructor-personal-account-card">
                  {isntdata.amount_of_coaching_sessions}
                </p>
              </div>
            </div>
          </div>

          <div></div>

          <div>{/* <button onClick={() => onAdd(product)}>Add</button> */}</div>
        </div>
      </div>
    </>
  );
}

export default InstructorAccountCards;
