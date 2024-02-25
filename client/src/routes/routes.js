import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import filtersSlide from "../redux/slices/filtersSlide";
import AllRoutes from ".";

const Routers = () => {
   // const routes = createBrowserRouter([]);

   // const dispatch = useDispatch();
   // const location = useLocation();

   // function clearAllFilters() {
   //    dispatch(filtersSlide.actions.colorFilterChange([]));
   //    dispatch(filtersSlide.actions.sizeFilterChange([]));
   //    dispatch(filtersSlide.actions.categoryFilterChange([]));
   // }

   // useEffect(() => {
   //    clearAllFilters();
   // }, [location]);

   return (
      <BrowserRouter>
         <AllRoutes />
      </BrowserRouter>
   );
};

export default Routers;
