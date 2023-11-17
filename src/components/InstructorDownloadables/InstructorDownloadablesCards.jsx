import React from 'react'

function InstructorDownloadablesCards(props) {
        const {iddata} =props

  return (
    <div>

  
    <div className="instructor-card-content">
          <img
            className="instructor-courses-img"
            src={iddata.img_src1}
            alt="instructor-account-avatar-image"
          ></img>
          <h2 className="instructor-card-title di">{iddata.title}</h2>
       
              </div>

    </div>
  )
}

export default InstructorDownloadablesCards