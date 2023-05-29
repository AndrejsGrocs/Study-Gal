import React from 'react'
import instrmaindata from "../../components/Data/InstructorMainData";
import InstructorAccountCards from './InstructorAccountCards';

function InstructorAccountComponent() {

  const { instructor_main_data } = instrmaindata;
  return (
    <>
    
    {instructor_main_data.map((isntdata) => (
          <InstructorAccountCards key={isntdata.id} isntdata={isntdata} />
        ))}

    
    </>
  )
}

export default InstructorAccountComponent