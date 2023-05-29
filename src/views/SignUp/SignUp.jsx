import React, {useState, useRef} from 'react'
import Illustartion1 from '../../img/Study Gal Characters1.png'
import IllustartionLight from '../../img/study-image.png'


export default function SignUp() {



  const form = useRef();
  return (
    <div className='sign-up-page-body'>
     
      <form className='sign-up-form'  >
      <h1 className='sup-h1'>SIGN UP WITH STUDY GAL</h1>
  
        <input className='form-input' type='text'  name='from_name' placeholder='Full Name*'   required/>
        <input className='form-input' type='email' name='reply_to' placeholder='Email*'   required/>
        <input className='form-input' type='password' name='reply_to' placeholder='Password*'   required/>
        <h1 className='sup-h1'>Personal information</h1>



        <input className='form-input' type='date' name='message_subject' placeholder='Date of birth*'   required/>
        <input className='form-input' type='text' name='from_company' placeholder='Country/Region' required/>
        <input className='form-input' type='text' name='from_company' placeholder='State' required/>
        <input className='form-input' type='text' name='from_company' placeholder='City' required/>
        <input className='form-input' type='text' name='from_company' placeholder='Street' required/>
        
        <button className='btn-send' type='submit' value='Send'>CREATE ACCOUNT</button>

        <p className='form-bottom-text'>Already have an account? Login</p>
        <div className="sign-up-page-illustration-container">
          <img className="landing-illustration-1" src={Illustartion1}></img>
          <img className="landing-illustration-1-light" src={IllustartionLight}></img>

          </div>
       
       
    
        
      </form>


    </div>
  )
}
