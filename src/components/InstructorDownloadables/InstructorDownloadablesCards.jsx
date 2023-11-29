import React from 'react'
import DeleteButton from '../../img/Buttons_Elements/delete_small.png'
import Delete from '../../../src/App'

function InstructorDownloadablesCards(props) {
        const {iddata} =props

  return (
    <div>

  <div className="instructor-courses-card downloadables-card-addition">
    <div className="instructor-courses-card-content">
    <div className='instructor-downloadables-img-section'>
          <img
            className="instructor-downloadables-img"
            src={iddata.img_src1}
            alt="instructor-account-avatar-image"
          ></img>
          </div>
          <h2 className="instructor-courses-card-title">{iddata.title}</h2>
          
          <div className="courses-cards-buttons">
          <button className="update-button">Update</button>
       
       <img  className="delete_button" src={DeleteButton} onClick={Delete}/>

          </div>
       
              </div>

    </div>
    </div>
  )
}

export default InstructorDownloadablesCards