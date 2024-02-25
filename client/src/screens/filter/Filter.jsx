import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

const Filter = ({ filterData, handleToogle }) => {
   return (
      <form className="hidden lg:block bg-white h-fit pt-6 px-4 font-sans">
         <h3 className="text-xl font-semibold pb-4 border-b text-gray-900">
            Filter
         </h3>
         {filterData.map((section) => (
            <Disclosure
               as="div"
               key={section.id}
               className="border-b border-gray-200 pl-3"
            >
               {({ open }) => (
                  <>
                     <h3 className="my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-base text-gray-400 hover:text-gray-500">
                           <span className="font-medium text-gray-900">
                              {section.name}
                           </span>
                           <span className="ml-6 flex items-center">
                              {open ? (
                                 <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                 />
                              ) : (
                                 <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                 />
                              )}
                           </span>
                        </Disclosure.Button>
                     </h3>
                     <Disclosure.Panel className="pb-6">
                        <div className="space-y-4 pl-2 ">
                           {section.options.map((option, optionIdx) => (
                              <div
                                 key={option.value}
                                 className="flex items-center "
                              >
                                 <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    onChange={handleToogle}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                 />
                                 <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-base text-gray-600 cursor-pointer"
                                 >
                                    {option.label}
                                 </label>
                              </div>
                           ))}
                        </div>
                     </Disclosure.Panel>
                  </>
               )}
            </Disclosure>
         ))}
         {/* <button
            className="w-full h-10 text-white text-xl font-semibold bg-blue-700"
            onClick={filterHandle}
         >
            Filter
         </button> */}
      </form>
   );
};

export default Filter;
