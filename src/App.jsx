 
 import './main.scss'
 import { Routes ,Route} from 'react-router-dom'
 
import pagesLazyLoad from './PagesLazyLoad'
import Home from './Pages/Home'
//Lazy Shared Components
const Navbar = pagesLazyLoad('Shared', 'Navbar');
function App() { 


  return (
    <div  >
      <Navbar />
  <Routes>
     
 
<Route path='/' element={<Home />} />
 
     
       </Routes>
    </div>
  )
}

export default App
