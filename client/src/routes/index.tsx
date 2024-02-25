import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import LoadingAnimation from "../components/loadingAnimation/LoadingAnimation";
import { PATHS } from "@/constants/path";

// Hero Section
const HeroSection = lazy(() => import("../screens/landing/RootSection"));

// Authentication
const Authentication = lazy(() => import("../screens/auth/Authentication"));
const LoginForm = lazy(() => import("../screens/auth/components/LoginForm"));
const RegisterForm = lazy(
   () => import("../screens/auth/components/RegisterForm")
);

// Shop
const Shop = lazy(() => import("../screens/shop/Shop"));

// Contact
const Contact = lazy(() => import("../screens/contact/Contact"));

// Cart
const Cart = lazy(() => import("../screens/cart/Cart"));

type LoadComponentProps = {
   component: React.LazyExoticComponent<() => JSX.Element>;
};

const LazyLoadingComponent = ({ component: Component }: LoadComponentProps) => {
   return (
      <Suspense fallback={<LoadingAnimation />}>
         <Component />
      </Suspense>
   );
};

const heroSectionRoute = {
   path: PATHS.HOME.IDENTITY,
   element: <LazyLoadingComponent component={HeroSection} />,
};

const authRoute = {
   path: PATHS.AUTH.IDENTIFY,
   element: <LazyLoadingComponent component={Authentication} />,
   children: [
      {
         path: "",
         element: <Navigate to={`${PATHS.REGISTER.IDENTITY}`} replace />,
      },
      {
         path: PATHS.LOGIN.IDENTITY,
         element: <LazyLoadingComponent component={LoginForm} />,
      },
      {
         path: PATHS.REGISTER.IDENTITY,
         element: <LazyLoadingComponent component={RegisterForm} />,
      },
   ],
};

const shopRoute = {
   path: PATHS.SHOP.IDENTITY,
   element: <LazyLoadingComponent component={Shop} />,
};

export default function AllRoutes() {
   return useRoutes([
      authRoute,
      {
         path: "/",
         element: <HomeLayout />,
         children: [heroSectionRoute],
      },
      {
         path: "/shop",
         element: <HomeLayout />,
         children: [shopRoute],
      },
   ]);
}
