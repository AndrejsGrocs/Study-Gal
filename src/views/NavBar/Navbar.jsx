import React from 'react'
import { Link } from 'react-router-dom'
import logoimg from '../../img/logo.svg'
import instalogo from '../../img/instagram-logo.png'


export default function Navbar() {
  return (
    <>

    
    
    <div className='nav'>
   
    <div className='logo-section'>
           <a className='company-logo' href="/" >{<img className='nav-logo-img' src={logoimg} alt='logo'></img>}</a>   
        </div>
            <ul className='nav-list'>

            <div class="wrapper">

            <div class="switch_box box_1">
			<input type="checkbox" class="switch_1"/>
		</div>
            </div>

            
    

    <div>
      
    </div>

          <div className='navbar-button-section'>
          
        {( 
            <>
            
            {/* <li><Link to='/' activeclassname='active' className='nav-link'> Home</Link></li>
            <li><Link to='/instructor-dashboard' activeclassname='active' className='nav-link'>Instructor</Link></li> */}
            <button className='landing-btn-login'><Link to='/login-page' activeclassname='active' className='nav-link'>LOGIN</Link></button>
            <button className='landing-btn-signup'><Link to='/signup-page' activeclassname='active' className='nav-link'>SIGN UP</Link></button>
            <button className='landing-btn-signup'><Link to='/instructor-dashboard' activeclassname='active' className='nav-link'>DASHBOARD</Link></button>
           
        
          
               </>
        )}
        </div>

        
       



        </ul>



    
    
    </div>
    </>
  )
}
