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

          
          
        {( 
            <>
            
            <li><Link to='/' activeclassname='active' className='nav-link'> Home</Link></li>
            <li><Link to='/instructor-dashboard' activeclassname='active' className='nav-link'>Instructor</Link></li>
            <li><Link to='/login-page' activeclassname='active' className='nav-link'>Login</Link></li>
            <li><Link to='/signup-page' activeclassname='active' className='nav-link'>Sign Up</Link></li>
           
        
          
               </>
        )}

        
       



        </ul>



    
    
    </div>
    </>
  )
}
