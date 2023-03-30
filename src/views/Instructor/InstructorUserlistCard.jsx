import React from 'react'

function InstructorUserlistCard(props) {

    const { userslist2 } = props;

    function log() {
      console.log(userslist2);
    }


  return (

   
    <div className="userlist-card-content">


            <h2 className='students-name'>{userslist2.studentname}</h2>
            <h2 className='students-subscription'>  -  {userslist2.subscription}</h2>
            



    </div>
  )
}

export default InstructorUserlistCard