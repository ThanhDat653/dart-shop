import React, { Suspense } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";

const HomeLayout = () => {
   return (
      <div>
         <Header />
         <Suspense fallback={<LoadingAnimation />}>
            <Outlet />
         </Suspense>
         <Footer />
      </div>
   );
};

export default HomeLayout;
