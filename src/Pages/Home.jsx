import {Suspense} from 'react'
import Description from '../Components/Description'

const Home = () => {
  return (
    <div id='Home' key="Home_parent">
  <Suspense fallback={<div>Loading ....</div>}>
<Description/>
</Suspense>
</div>
  )
}

export default Home