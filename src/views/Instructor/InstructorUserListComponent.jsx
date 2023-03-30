import React from 'react'
import InstructorUserlistCard from "./InstructorUserlistCard";
import userslist1 from "../../components/Data/UserlistData";



function InstructorUserListComponent() {


    const {  usersList} = userslist1;
  return (
    <div>
            {usersList.map((userslist2) => (
          <InstructorUserlistCard key={userslist2.id} userslist2={userslist2} />
        ))}
        
    </div>
  )
}

export default InstructorUserListComponent