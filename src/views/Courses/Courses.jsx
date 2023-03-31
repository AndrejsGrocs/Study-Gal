import React from 'react'
import InstructorNav from '../InstructorNav/InstructorNav'
import coursesData from "../../components/Data/CoursesData";
import InstructorCoursesCards from './InstructorCoursesCards';

function Courses() {


  const { cdata } = coursesData;
  return (
    <div className='courses-page-body'>
        
        <InstructorNav/>

        <div className='cards-section'>
      
        {/* {cdata.map((icdata) => (
          <InstructorCoursesCards key={icdata.id} icdata={icdata} />
        ))} */}

      <InstructorCoursesCards/>
      </div>
    </div>
  )
}

export default Courses