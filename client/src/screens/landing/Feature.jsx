import React from "react";

const Feature = () => {
   return (
      <div className="my-28">
         <h1 className="px-20 md:px-[20%] lg:px-[25%] xl:px-[30%] text-center text-gray-800 font-bold text-4xl uppercase">
            Simplify Your Shopping Experience with Us
         </h1>
         <ul className="grid mt-20 lg:grid-cols-4 lg:mx-[8%] lg:gap-10 md:gap-8 sm:grid-cols-2 sm:mx-[5%] ">
            <li className="flex flex-col justify-start items-center lg:px-2 md:h-52 md:px-10 h-60 px-28 mb-5">
               <div className="text-center text-gray-700">
                  <i className="fa-solid fa-truck text-4xl"></i>
                  <h1 className="mt-3 text-lg font-bold uppercase">
                     Fast Delivery
                  </h1>
               </div>
               <span className="mt-8 text-center text-base font-[14px] text-gray-600">
                  Enjoy a shopping experience without waiting with our fast
                  delivery service.
               </span>
            </li>

            <li className="flex flex-col justify-start items-center lg:px-2 md:h-52 md:px-10 h-60 px-28 mb-5">
               <div className="text-center text-gray-700">
                  <i className="fa-solid fa-money-check-dollar text-4xl"></i>
                  <h1 className="mt-3 text-lg font-bold uppercase">
                     Convenient Payment
                  </h1>
               </div>
               <span className="mt-8 text-center text-base font-[14px] text-gray-600">
                  Experience an easy and secure payment process with various
                  payment methods
               </span>
            </li>

            <li className="flex flex-col justify-start items-center lg:px-2 md:h-52 md:px-10 h-60 px-28 mb-5">
               <div className="text-center text-gray-700">
                  <i className="fa-solid fa-circle-check text-4xl"></i>
                  <h1 className="mt-3 text-lg font-bold uppercase">
                     Authentic Products
                  </h1>
               </div>
               <span className="mt-8 text-center text-base font-[14px] text-gray-600">
                  We are committed to bringing you quality authentic products
                  from reputable brands.
               </span>
            </li>

            <li className="flex flex-col justify-start items-center lg:px-2 md:h-52 md:px-10 h-60 px-28 mb-5">
               <div className="text-center text-gray-700">
                  <i className="fa-solid fa-tags text-4xl"></i>
                  <h1 className="mt-3 text-lg font-bold uppercase">
                     Exclusive Benefits
                  </h1>
               </div>
               <span className="mt-8 text-center text-base font-[14px] text-gray-600">
                  There are a variety of exclusive benefits, including special
                  discounts and complimentary gifts.
               </span>
            </li>
         </ul>
      </div>
   );
};

export default Feature;
