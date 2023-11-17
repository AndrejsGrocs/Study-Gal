import React from 'react'
import instrdownloadablesdata from "../../components/Data/DownloadablesData";
import InstructorDownloadablesCards from './InstructorDownloadablesCards';

function InstructorDownloadablesComponent() {

  const {downloadables} = instrdownloadablesdata
  return (
   <>

    {downloadables.map((iddata) =>(
      <InstructorDownloadablesCards key={iddata.id} iddata={iddata}/>
  ))}
  </>
  )
}

export default InstructorDownloadablesComponent