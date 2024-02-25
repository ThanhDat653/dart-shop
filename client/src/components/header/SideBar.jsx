import React from "react";

const SideBar = () => {
   return (
      <>
         <ul className="flex justify-end  h-[33px] items-center sm:h-8 sm:items-end">
            <li className=" text-gray-800 mx-2 hover:text-rose-700 cursor-pointer transition-all sm:block hidden">
               <i className="text-[20px] top-navbar__icon fa-regular fa-heart" />
            </li>
            <li
               className=" text-gray-800 mx-2 hover:text-rose-700 cursor-pointer transition-all"
               id="cart"
            >
               <i className="text-[20px] top-navbar__icon fa-solid fa-bag-shopping" />
            </li>
            <li
               className=" text-gray-800 mx-2 hover:text-rose-700 cursor-pointer transition-all sm:block hidden"
               title="Lang: English"
            >
               <i className="text-[20px] top-navbar__icon fa-solid fa-globe" />
            </li>
            <li
               className=" text-gray-800 mx-2 hover:text-rose-700 cursor-pointer transition-all sm:hidden block"
               title="Lang: English"
            >
               <i className="text-[20px] top-navbar__icon fa-solid fa-bars" />
            </li>
         </ul>
      </>
   );
};

export default SideBar;
