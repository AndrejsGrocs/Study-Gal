import React from 'react'
import InstructorCourses from '../../components/InstructorCourses/InstructorCourses'
import InstructorNav from '../InstructorNav/InstructorNav'

function Courses() {
  return (
    <div className='courses-page-body'>
        
        <InstructorNav/>

        <div className='cards-section'>
      

      <InstructorCourses/>
      </div>
    </div>
  )
}

export default Courses