import { PATHS } from '@/constants/path'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
   const ulStyle =
      "absolute right-[-12px] top-full hidden group-hover:block w-44 mt-2 py-1 shadow-lg bg-white rounded-sm before:content-[''] before:block before:absolute before:bottom-full before:right-0 before:w-[40%] before:h-4"
   return (
      <>
         <ul className="flex justify-end h-[33px] items-center sm:h-8 sm:items-end">
            <li className="pt-[5px] text-gray-800 mx-3 hover:text-rose-700 cursor-pointer transition-all">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6 hover:text-rose-700 duration-200"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
               </svg>
            </li>
            <li className="pb-[2px] text-gray-800 mx-3 cursor-pointer transition-all">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6 hover:text-rose-700 duration-200"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
               </svg>
            </li>
            <li
               className="relative text-gray-800 mx-3 cursor-pointer transition-all group"
               onClick={() => {}}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-rose-700"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
               </svg>
               <ul className={ulStyle}>
                  <li className="my-3 px-6 text-base text-gray-600 hover:text-rose-700 transition-colors duration-200">
                     My Account
                  </li>
                  <li className="my-3 px-6 text-base text-gray-600 hover:text-rose-700 transition-colors duration-200">
                     My Purchase
                  </li>
                  <li className="my-3 px-6 text-base text-gray-600 hover:text-rose-700 transition-colors duration-200">
                     <NavLink to={`/${PATHS.AUTH.IDENTIFY}`}>Login</NavLink>
                  </li>
               </ul>
            </li>
         </ul>
      </>
   )
}

export default SideBar
