import React from 'react'
import InstructorNav from '../InstructorNav/InstructorNav'
import coursesData from "../../components/Data/CoursesData";
import InstructorCoursesCards from '../../components/InstructorCourses/InstructorCoursesCards';

function Courses() {


  const { cdata } = coursesData;
  return (
    <div className='courses-page-body'>
        
        <InstructorNav/>

        <div className='cards-section'>
      
      

      <InstructorCoursesCards/>
      </div>
    </div>
  )
}

export default Courses