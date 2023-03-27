import React from 'react'
import InstructorDownloadables from '../../components/InstructorDownloadables/InstructorDownloadables'
import InstructorNav from '../InstructorNav/InstructorNav'


function Downloadables() {
  return (
    <div className='downloadables-page-body'>
        
    <InstructorNav/>

    <div className='cards-section'>
  

  <InstructorDownloadables/>
  </div>
</div>
  )
}

export default Downloadables