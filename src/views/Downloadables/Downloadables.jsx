import React from 'react'
import InstructorDownloadablesComponent from '../../components/InstructorDownloadables/InstructorDownloadablesComponent'
import InstructorNav from '../InstructorNav/InstructorNav'


function Downloadables() {
  return (
    <div className='downloadables-page-body'>
        
    <InstructorNav/>

    <div className='cards-section'>
  

  <InstructorDownloadablesComponent/>
  </div>
</div>
  )
}

export default Downloadables