import React from 'react'
import InstructorAccountComponent from '../../components/InstructorAccountComponent/InstructorAccountComponent'
import InstructorNav from '../InstructorNav/InstructorNav'

function InstructorAccount() {
  return (
    <div className='instructor-account-page-body'>
        
    <InstructorNav/>

    <div className='cards-section'>
  

  <InstructorAccountComponent/>
  </div>
</div>
  )
}

export default InstructorAccount