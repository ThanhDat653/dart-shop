import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation'

const Authentication = () => {
   return (
      <div className="w-screen h-screen">
         <Suspense fallback={<LoadingAnimation />}>
            <Outlet />
         </Suspense>
      </div>
   )
}

export default Authentication
