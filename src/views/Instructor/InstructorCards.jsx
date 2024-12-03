import React from "react";

function InstructorCards(props) {



  const { idata } = props;

  function log() {
    console.log(idata);
  }

  return (
    <>
    
      <div className="instructor-card">
      <div className="instructor-card-content">
        {/* <button onClick={()=>log()}>Log</button> */}
        <h2 className="instructor-card-title-1">{idata.name}</h2>
        <p className="instructor-card-amount" >{idata.amount}</p>
        <p className="instructor-card-increase" >{idata.increase} % last month</p>

        

        <div>
          




        </div>


        
        
        


        <div>{/* <button onClick={() => onAdd(product)}>Add</button> */}</div>
      </div>
      </div>

      
    </>
  );
}

export default InstructorCards;
