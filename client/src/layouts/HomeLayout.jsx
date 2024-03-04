import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import LoadingAnimation from '../components/LoadingAnimation/LoadingAnimation'
import Header from './header/Header'
import Footer from './footer/Footer'

const HomeLayout = () => {
   return (
      <div>
         <Header />
         <Suspense fallback={<LoadingAnimation />}>
            <Outlet />
         </Suspense>
         <Footer />
      </div>
   )
}

export default HomeLayout
