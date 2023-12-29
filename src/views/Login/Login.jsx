import React from 'react'
import Illustartion2 from '../../img/Study Gal Characters2.png'
import { Link } from "react-router-dom";


export default function LogIn() {
  return (
    <div className='login-page-body'>

<form className='login-form'  >
<h1 className='logp-h1'>LOGIN WITH STUDY GAL</h1>
  
   
        <input className='form-input' type='email' name='reply_to' placeholder='Email*'   required/>
        <input className='form-input' type='password' name='reply_to' placeholder='Password*'   required/>

        
        <button className='btn-login' type='submit' value='Send'>LOGIN</button>

        <p className='form-bottom-text'>New to Study Gal? 
        <Link
                    to="/signup-page"
                    activeclassname="active"
                    className="nav-link-login"
                  > Sign Up
                  </Link>
                  </p>
        <div className="sign-up-page-illustration-container">
          <img className="login-illustration-1" src={Illustartion2}></img>

          </div>
       
       
    
        
      </form>
      
    </div>
  )
}
