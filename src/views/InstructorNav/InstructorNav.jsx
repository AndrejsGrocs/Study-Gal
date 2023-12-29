import React from 'react'
import { NavLink } from 'react-router-dom'

function InstructorNav() {
  return (
    <>
    

          <div className=''>
        <ul className='instructor-page-menu'>
          <li ><NavLink to='/instructor-dashboard' className='menu-item' activeClassName='active'  >Dashboard</NavLink></li>
          <li ><NavLink to='/courses' className='menu-item' activeClassName='active'>Courses</NavLink></li>
          <li ><NavLink to='/downloadable' className='menu-item' activeClassName='active'>Downloadable’s</NavLink></li>
          <li ><NavLink to='/account' className='menu-item' activeClassName='active'>Account</NavLink></li>
          <li ><NavLink to='/' className='menu-item' activeClassName='active'>Logout</NavLink></li>



      
        </ul>


      </div>
      </>
        
  )
}

export default InstructorNav