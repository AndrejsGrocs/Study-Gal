import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Navbar from '../views/NavBar/Navbar'
import Landing from '../views/Landing/Landing'
import Page1 from '../views/Instructor/Instructor-page'
import Page2 from '../views/Page2/Page2'
import Page3 from '../views/Page3/Page3'
import InstructorPage from '../views/Instructor/Instructor-page'




export default function MainRouter() {

  

    return (

        <Router>
        <nav> </nav>


            
       
        <Navbar/>
        
        <Routes>
              <Route path='/' element = {<Landing/>}/>
              <Route path='/instructor-dashboard' element = {<InstructorPage/>}/>
         

             


        

        </Routes>
          
          
        </Router>
    )
}