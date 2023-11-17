import React from 'react'
import InstructorNav from '../InstructorNav/InstructorNav'
import InstructorCoursesComponent from '../../components/InstructorCourses/InstructorCoursesComponent'


function Courses() {



  return (
    <div className='courses-page-body'>
        
        <InstructorNav/>

        <div className='cards-section'>
      
      

      <InstructorCoursesComponent/>
      </div>
    </div>
  )
}

export default Courses