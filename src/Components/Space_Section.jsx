import UseSuspense from '../Hooks/useSuspense'
import ItGroupes_List from './ItGroupes_List'
import Post_section from './Post_section'

const Space_Section = () => {
  return (
    <div className='Space_Section'>
       <UseSuspense>
        <ItGroupes_List />
        </UseSuspense>
        <UseSuspense>
        <Post_section/>
        </UseSuspense>

    </div>
  )
}

export default Space_Section