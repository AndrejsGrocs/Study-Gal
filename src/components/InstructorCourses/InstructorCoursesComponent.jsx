import React from 'react'
import instrcoursesdata from "../../components/Data/CoursesData";
import InstructorCoursesCards from './InstructorCoursesCards';

function InstructorCoursesComponent() {
    const {courses} = instrcoursesdata
  return (
    <>

    <div className='instructor-courses-cards-container'>
    <button className='add-course-button'>ADD COURSE</button>
    {courses.map((icdata) =>(
        <InstructorCoursesCards key={icdata.id} icdata={icdata}/>
    ))}
    </div>

    </>
   
    
  )

  
}

export default InstructorCoursesComponent