import React from 'react'

function InstructorAccountCards(props) {


    const { isntdata } = props;

  return (
    <>
    
      <div className="instructor-card">
      <div className="instructor-card-content">
    
        <img
        className=""
        src={isntdata.instr_img_src}
        alt="instructor-account-avatar-image"
      ></img>
        <h2 className="instructor-card-title">Instructor name {isntdata.inst_name}</h2>
        <p className="instructor-card-amount" >{isntdata.skills}</p>
        <p className="instructor-card-increase" >COURSES {isntdata.amount_of_courses}</p>
        <p className="instructor-card-increase" >DOWNLOADABLES {isntdata.amount_of_downloadables}</p>
        <p className="instructor-card-increase" >COACHING SESSIONS BOOKED {isntdata.amount_of_coaching_sessions}</p>

        

        <div>
          




        </div>


        
        
        


        <div>{/* <button onClick={() => onAdd(product)}>Add</button> */}</div>
      </div>
      </div>

      
    </>
  )
}

export default InstructorAccountCards