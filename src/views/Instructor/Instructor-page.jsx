import React from 'react'
import InstructorCards from '../../components/InstructorCards/InstructorCards'



export default function InstructorPage() {
  return (

    


    <div className='instructor-page-body'>
     

      <div>
        <ul className='instructor-page-menu'>
          <li className='menu-item'>Dashboard</li>
          <li className='menu-item'>Courses</li> 
          <li className='menu-item'>Downloadable’s</li> 
          <li className='menu-item'>Account</li> 
          <li className='menu-item'>Logout</li>  
        </ul>


      </div>
      <div className='cards-section'>

      <InstructorCards/>
      </div>




      



          
          
      
    

    </div>
  )
}
