import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   return (
      <ul className="hidden flex-row justify-center items-center py-3 border-y border-b-0 border-gray-300 sm:flex">
         <li className="mx-8">
            <NavLink to="/">
               <span className="uppercase font-medium text-base text-gray-800 hover:text-red-800 transition-colors">
                  home
               </span>
            </NavLink>
         </li>
         <li className="mx-8">
            <NavLink to="/shop">
               <span className="uppercase font-medium text-base text-gray-800 hover:text-red-800 transition-colors">
                  shop
               </span>
            </NavLink>
         </li>
         <li className="mx-8">
            <NavLink to="/contact">
               <span className="uppercase font-medium text-base text-gray-800 hover:text-red-800 transition-colors">
                  contact
               </span>
            </NavLink>
         </li>
         <li className="mx-8">
            <NavLink to="/about">
               <span className="uppercase font-medium text-base text-gray-800 hover:text-red-800 transition-colors">
                  about
               </span>
            </NavLink>
         </li>
         <li className="mx-8">
            <NavLink to="/shop:category-sale">
               <span className="uppercase font-medium text-base text-gray-800 hover:text-red-800 transition-colors">
                  sales
               </span>
            </NavLink>
         </li>
      </ul>
   )
}

export default Navbar
