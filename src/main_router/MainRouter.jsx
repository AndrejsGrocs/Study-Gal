import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Navbar from '../views/NavBar/Navbar'
import Landing from '../views/Landing/Landing'
import Page1 from '../views/Instructor/Instructor-page'
import Login from '../views/Login/Login'
import SignUp from '../views/SignUp/SignUp'
import InstructorPage from '../views/Instructor/Instructor-page'




export default function MainRouter() {

  

    return (

        <Router>
        <nav> </nav>


            
       
        <Navbar/>
        
        <Routes>
              <Route path='/' element = {<Landing/>}/>
              <Route path='/instructor-dashboard' element = {<InstructorPage/>}/>
              <Route path='/login-page' element = {<Login/>}/>
              <Route path='/signup-page' element = {<SignUp/>}/>
         

             


        

        </Routes>
          
          
        </Router>
    )
}