import React from 'react'
import instrcoursesdata from "../../components/Data/CoursesData";
import InstructorCoursesCards from './InstructorCoursesCards';

function InstructorCoursesComponent() {
    const {courses} = instrcoursesdata
  return (
    <>


    {courses.map((icdata) =>(
        <InstructorCoursesCards key={icdata.id} icdata={icdata}/>
    ))}

    </>
   
    
  )

  
}

export default InstructorCoursesComponent