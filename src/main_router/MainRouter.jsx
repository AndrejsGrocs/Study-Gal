import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Navbar from '../views/NavBar/Navbar'
import Landing from '../views/Landing/Landing'
import Page1 from '../views/Page1/Page1'
import Page2 from '../views/Page2/Page2'
import Page3 from '../views/Page3/Page3'




export default function MainRouter() {

  

    return (

        <Router>
        <nav> </nav>


            
       
        <Navbar/>
        
        <Routes>
              <Route path='/' element = {<Landing/>}/>
              <Route path='/page1' element = {<Page1/>}/>
              <Route path='/page2' element = {<Page2/>}/>
              <Route path='/page3' element = {<Page3/>}/>

             


        

        </Routes>
          
          
        </Router>
    )
}