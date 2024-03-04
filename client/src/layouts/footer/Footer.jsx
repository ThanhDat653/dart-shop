import React from "react";

const Footer = () => {
   return (
      <div
         className="flex w-screen items-center justify-center bg-gray-900 h-[330px] border-t-[12px] border-red-700"
         id="footer"
      >
         <div className="grid grid-cols-4 container mx-auto max-w-7xl sm:px-6 text-white ">
            <div className="">
               <img
                  src="./assets/images/footer_logo.png"
                  alt="log"
                  className="h-12 mb-6"
               />
               <ul className="text-gray-300 flex flex-col ">
                  <li className="text-sm my-2 inline-block">
                     Team of designers and developers in SGU
                  </li>
                  <li className="text-sm my-2 inline-block">
                     ADDRESS: 6688Princess Road, London, Greater London
                  </li>
                  <li className="text-sm my-2 inline-block">
                     PHONE: (012) 800 456 789-987
                  </li>
                  <li className="text-sm my-2 inline-block">
                     EMAIL: datnt.653@gmail.com
                  </li>
               </ul>
            </div>
            <div className="flex flex-col pl-10">
               <h2 className="text-lg font-bold mb-6 h-12 flex items-end pb-2">
                  Customer Care
               </h2>
               <ul className="text-gray-300 flex flex-col">
                  <li className="text-sm my-2 inline-block">Clothing</li>
                  <li className="text-sm my-2 inline-block">Shoes</li>
                  <li className="text-sm my-2 inline-block">Handbag</li>
                  <li className="text-sm my-2 inline-block">Accessories</li>
                  <li className="text-sm my-2 inline-block">Fashion</li>
               </ul>
            </div>
            <div className="flex flex-col pl-10">
               <h2 className="text-lg font-bold mb-6 h-12 flex items-end pb-2">
                  Information
               </h2>
               <ul className="text-gray-300 flex flex-col">
                  <li className="text-sm my-2 inline-block">About Us</li>
                  <li className="text-sm my-2 inline-block">Contact Us</li>
                  <li className="text-sm my-2 inline-block">My orders</li>
                  <li className="text-sm my-2 inline-block">
                     Terms &amp; Conditions
                  </li>
                  <li className="text-sm my-2 inline-block">
                     Returns &amp; Exchanges
                  </li>
               </ul>
            </div>
            <div className="flex flex-col pl-10">
               <h2 className="text-lg font-bold mb-6 h-12 flex items-end pb-2">
                  Follow Us
               </h2>
               <p className="text-sm my-2 inline-block">
                  Follow us to be notificated of sales
               </p>
               <div className="flex flex-row justify-between">
                  <div className="social-icon social-icon__facebook">
                     <i className="fa-brands fa-facebook-f" />
                  </div>

                  <div className="social-icon social-icon__twitter">
                     <i className="fa-brands fa-twitter" />
                  </div>

                  <div className="social-icon social-icon__instagram">
                     <i className="fa-brands fa-instagram" />
                  </div>

                  <div className="social-icon social-icon__pinterest">
                     <i className="fa-brands fa-pinterest-p" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
