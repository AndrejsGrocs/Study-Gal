import React from 'react'
import instrcoursesdata from "../../components/Data/CoursesData";
import InstructorCoursesCards from './InstructorCoursesCards';

function InstructorCoursesComponent() {
    const {instructor_courses_data} = instrcoursesdata
  return (
    <>
    <div>InstructorCoursesComponent</div>

    {instructor_courses_data.map((icdata) =>(
        <InstructorCoursesCards key={icdata.id} icdata={icdata}/>
    ))}

    </>
   
    
  )

  
}

export default InstructorCoursesComponent