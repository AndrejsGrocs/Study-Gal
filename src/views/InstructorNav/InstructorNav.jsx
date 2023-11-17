import React from 'react'
import { Link } from 'react-router-dom'

function InstructorNav() {
  return (
    <>
    

          <div className=''>
        <ul className='instructor-page-menu'>
          <li ><Link to='/instructor-dashboard' className='menu-item' activeclassname='active'  >Dashboard</Link></li>
          <li ><Link to='/courses' className='menu-item' activeclassname='active'>Courses</Link></li>
          <li ><Link to='/downloadable' className='menu-item' activeclassname='active'>Downloadable’s</Link></li>
          <li ><Link to='/account' className='menu-item' activeclassname='active'>Account</Link></li>
          <li ><Link to='/' className='menu-item' activeclassname='active'>Logout</Link></li>



      
        </ul>


      </div>
      </>
        
  )
}

export default InstructorNav