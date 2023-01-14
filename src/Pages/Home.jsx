import UseSuspense from '../Hooks/useSuspense'
import Description from '../Components/Description'
import FilterBar from '../Components/FilterBar'
import Space_Section from '../Components/Space_Section'

const Home = () => {
  return (
    <div id='Home' key="Home_parent">
  <UseSuspense >
<Description/>
</UseSuspense>
<UseSuspense >
<FilterBar />
</UseSuspense>
<UseSuspense >
<Space_Section />
</UseSuspense>

</div>
  )
}

export default Home