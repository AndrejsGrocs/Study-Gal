import React from 'react'
import CardsImage from '../../img/Group 449.png'
import GooglePlay from '../../img/Google Play.svg'
import AppStore from '../../img/App Store.svg'

function LandingSection3() {
  return (
    <div>
        <div className='landing-section-3-body'>

        <div className='landing-section-3-container'>
        <h1 className='lp3-h1'>Keep Track of your Earnings</h1>
   
   <div className="cards-image-container">
<img className="cards-image" src={CardsImage}></img>




        </div>
        <div className='store-icons-container'>
        <h1 className='store-icons-h1'>Download App</h1>
<img className="google-play-button-image" src={GooglePlay}></img>
<img className="app-store-button-image" src={AppStore}></img>

</div>
        


    </div>



</div></div>
  )
}

export default LandingSection3