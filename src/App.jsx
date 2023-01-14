 
 import './main.scss'
 import { Routes ,Route} from 'react-router-dom'
 
import pagesLazyLoad from './PagesLazyLoad'
import Home from './Pages/Home'
import { QueryClientProvider,QueryClient } from 'react-query'
//Lazy Shared Components
const Navbar = pagesLazyLoad('Shared', 'Navbar');
function App() { 

  const queryClient = new QueryClient();

  return (
    <div key="App">
       <QueryClientProvider client={queryClient}>
    <Navbar />
  <Routes>
<Route path='/' element={<Home />} />    
  </Routes>
  </QueryClientProvider>
    </div>
  )
}

export default App
