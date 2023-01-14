import {Suspense} from 'react'
const UseSuspense = ({children}) => {
    let nass  = 'ree'
  return (
    <Suspense fallback={<div>... Loading</div>}>
        {children}
    </Suspense>
  )
}

export default UseSuspense