import React from 'react'
import CardsImage from '../../img/Group 449.png'
import CardsImageLight from '../../img/Group 505.png'
import GooglePlayDark from '../../img/Google Play.png'
import GooglePlayLight from '../../img/google-play.png'
import AppStoreDark from '../../img/App Store.png'
import AppStoreLight from '../../img/app-tore.png'

function LandingSection3() {
  return (
    <div>
        <div className='landing-section-3-body'>

        <div className='landing-section-3-container'>
        <h1 className='lp3-h1'>Keep Track of your Earnings</h1>
   
   <div className="cards-image-container">
<img className="cards-image" src={CardsImage}></img>
<img className="cards-image-light" src={CardsImageLight}></img>




        </div>
        <div className='store-icons-container'>
        <h1 className='store-icons-h1'>Download App</h1>
<img className="google-play-button-image" src={GooglePlayDark}></img>
<img className="google-play-button-image-light" src={GooglePlayLight}></img>
<img className="app-store-button-image" src={AppStoreDark}></img>
<img className="app-store-button-image-light" src={AppStoreLight}></img>

</div>
        


    </div>



</div></div>
  )
}

export default LandingSection3