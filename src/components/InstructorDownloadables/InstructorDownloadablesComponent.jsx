import React from 'react'
import instrdownloadablesdata from "../../components/Data/DownloadablesData";
import InstructorDownloadablesCards from './InstructorDownloadablesCards';

function InstructorDownloadablesComponent() {

  const {downloadables} = instrdownloadablesdata
  return (
   <>
   <div className='instructor-courses-cards-container'>

   <button className='add-downloadables-button'>ADD DOWNLOADABLE</button>

    {downloadables.map((iddata) =>(
      <InstructorDownloadablesCards key={iddata.id} iddata={iddata}/>
  ))}
  </div>
  </>
  )
}

export default InstructorDownloadablesComponent