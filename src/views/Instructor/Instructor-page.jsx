import React from 'react'
import { Link } from 'react-router-dom'
import InstructorCards from '../../components/InstructorCards/InstructorCards'
import InstructorNav from '../InstructorNav/InstructorNav'



export default function InstructorPage() {
  return (

    


    <div className='instructor-page-body'>
     

     <InstructorNav/>


      <div className='cards-section'>
      

      <InstructorCards/>
      </div>




      



          
          
      
    

    </div>
  )
}
