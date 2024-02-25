import { useEffect, useState } from "react";
import { FunnelIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import ProductList from "./ProductList";
import Pagination from "../../components/Pagination";
import Filter from "../filter/Filter";
import SideFilter from "../filter/SideFilter";
import ProductSort from "../filter/ProductSort";
import { filters } from "../../data/productData";
import filtersSlide from "../../redux/slices/filtersSlide";
import { useDispatch } from "react-redux";

// import LoadingAnimation from "../../../animation/LoadingAnimation";

// const ProductList = lazy(() => import("../container/products/ProductList"));

export default function Shop() {
   const dispatch = useDispatch();
   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
   const [filterData, setFilterData] = useState(filters);
   const [filterName, setFilterName] = useState();

   function handleCloseSideMenu() {
      setMobileFiltersOpen(false);
   }

   function handleToogle(e) {
      setFilterData(
         filterData.map((data) => {
            if (data.id === e.target.name) {
               return {
                  ...data,
                  options: data.options.map((option) => {
                     return option.value === e.target.value
                        ? { ...option, checked: !option.checked }
                        : option;
                  }),
               };
            }
            return data;
         })
      );

      setFilterName(e.target.name);
   }

   function getCheckedOptionsByName(name) {
      let checkedValue = [];
      filterData.forEach((filter) => {
         if (filter.id === name) {
            filter.options.forEach((option) => {
               if (option.checked) checkedValue.push(option.value);
            });
         }
      });
      return checkedValue;
   }

   useEffect(() => {
      switch (filterName) {
         case "color":
            dispatch(
               filtersSlide.actions.colorFilterChange(
                  getCheckedOptionsByName(filterName)
               )
            );
            break;
         case "size":
            dispatch(
               filtersSlide.actions.sizeFilterChange(
                  getCheckedOptionsByName(filterName)
               )
            );
            break;
         case "category":
            dispatch(
               filtersSlide.actions.categoryFilterChange(
                  getCheckedOptionsByName(filterName)
               )
            );
            break;
         default:
      }
   }, [filterData]);

   return (
      <div className="bg-gray-100">
         <div>
            {/* Mobile filter dialog */}
            {mobileFiltersOpen && (
               <SideFilter
                  mobileFiltersOpen={mobileFiltersOpen}
                  handleCloseSideMenu={handleCloseSideMenu}
                  filterData={filterData}
                  handleToogle={handleToogle}
               ></SideFilter>
            )}

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                     New Arrivals
                  </h1>

                  <div className="flex items-center">
                     <ProductSort></ProductSort>

                     <button
                        type="button"
                        className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                     >
                        <span className="sr-only">View grid</span>
                        <Squares2X2Icon
                           className="h-5 w-5"
                           aria-hidden="true"
                        />
                     </button>
                     <button
                        type="button"
                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                     >
                        <span className="sr-only">Filters</span>
                        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                     </button>
                  </div>
               </div>

               <section
                  aria-labelledby="products-heading"
                  className="pb-24 pt-6"
               >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                     {/* Filters */}
                     <Filter
                        filterData={filterData}
                        handleToogle={handleToogle}
                     ></Filter>

                     {/* Product list */}
                     <div className="lg:col-span-3">
                        {/* <Suspense
                           fallback={<LoadingAnimation></LoadingAnimation>}
                        > */}
                        <ProductList></ProductList>
                        {/* </Suspense> */}
                        <Pagination></Pagination>
                     </div>
                  </div>
               </section>
            </main>
         </div>
      </div>
   );
}
