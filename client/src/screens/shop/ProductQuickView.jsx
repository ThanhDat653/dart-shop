import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import cartSlide from "../../redux/slices/cartSlide";
import { filters } from "../../data/productData";
import { useCart, useCartDispatch } from "../cart/CartReducer";
import { NavLink } from "react-router-dom";

export default function ProductQuickView({ product, isOpen, setIsOpen }) {
   // const dispatch = useDispatch();
   const productsInCart = useCart();
   const dispatch = useCartDispatch();
   const [quantity, setQuantity] = useState(1);
   const [selectedSize, setSelectedSize] = useState();
   const availableSize = product.size;
   const initialSize = filters.find((filter) => filter.id === "size").options;

   console.log(productsInCart);

   function closeModal() {
      setIsOpen(false);
   }

   function handleSelectedSize(e) {
      setSelectedSize(e.target.value);
   }

   function validateNumber(inputValue) {
      const regex = /^[0-9]+$/;
      if (regex.test(inputValue) || inputValue === "") {
         setQuantity(inputValue);
      }
   }

   function validateQuantity(inputValue) {
      if (parseInt(inputValue) < 1 || inputValue === "") setQuantity(1);
      else if (parseInt(inputValue) > 99) setQuantity(99);
      else setQuantity(parseInt(inputValue));
   }

   function handleQuantityButtonClick(event) {
      switch (event) {
         case "plus":
         case "ArrowUp":
            if (quantity < 99) setQuantity(quantity + 1);
            break;
         case "minus":
         case "ArrowDown":
            if (quantity > 1) setQuantity(quantity - 1);
            break;

         default:
      }
   }

   function handleAddToCart() {
      let newProduct = {
         ...product,
         quantity: quantity,
         size: selectedSize,
      };
      let action = {
         type: "add_to_cart",
         payload: newProduct,
      };
      dispatch(action);
      // dispatch(cartSlide.actions.addToCart(newProduct));
      closeModal();
   }

   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-100"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="relative w-full max-w-screen-md transform overflow-hidden bg-white p-8 text-left align-middle shadow-xl">
                           <XMarkIcon
                              className="h-7 w-7 z-10 p-0.5 duration-100 absolute top-3 right-3 hover:text-gray-600 cursor-pointer text-gray-400"
                              onClick={closeModal}
                           />
                           <div className="grid grid-cols-5 gap-x-5">
                              <img
                                 src={`./assets/images/${product.img}`}
                                 alt={product.img}
                                 className="col-span-2 rounded-md h-96"
                              />
                              <div className="col-span-3 relative flex flex-col justify-between p-3">
                                 <div>
                                    <Dialog.Title
                                       as="h2"
                                       className="text-2xl font-medium leading-6 text-gray-900 mb-1"
                                    >
                                       {product.name}
                                    </Dialog.Title>
                                    <Dialog.Description className="line-clamp-2 text-sm text-gray-500 text-left mt-2">
                                       {product.desc}
                                    </Dialog.Description>
                                    <p className="mt-2 text-rose-700 text-3xl">
                                       ${product.price}
                                    </p>
                                 </div>
                                 <div className="">
                                    <div className="flex flex-row justify-start items-start">
                                       <span className="text-base font-medium text-gray-500 w-32 leading-8 mt-1">
                                          Size
                                       </span>
                                       <div className="flex flex-1 flex-wrap justify-start items-center">
                                          {initialSize.map((size) => {
                                             return (
                                                <button
                                                   key={size.value}
                                                   value={size.value}
                                                   className={
                                                      "border-2 m-1 w-9 h-9 rounded text-gray-700 text-lg font-medium transition-all font-sans text-center" +
                                                      " " +
                                                      (availableSize?.includes(
                                                         size.value
                                                      )
                                                         ? "hover:bg-slate-200"
                                                         : "opacity-40") +
                                                      " " +
                                                      (selectedSize ===
                                                      size.value
                                                         ? "border-red-700"
                                                         : "border-gray-500")
                                                   }
                                                   disabled={
                                                      !availableSize.includes(
                                                         size.value
                                                      )
                                                   }
                                                   onClick={handleSelectedSize}
                                                >
                                                   {size.label}
                                                </button>
                                             );
                                          })}
                                       </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-center mt-2">
                                       <span className="text-base font-medium text-gray-500 leading-8 mt-1 w-32">
                                          Quantity
                                       </span>
                                       <div className="flex items-center m-1">
                                          <button
                                             className="border-2 border-gray-400 w-8 h-8 rounded-s-sm text-gray-500 hover:bg-slate-100"
                                             name="minus"
                                             onClick={(e) =>
                                                handleQuantityButtonClick(
                                                   e.target.name
                                                )
                                             }
                                          >
                                             -
                                          </button>
                                          <input
                                             type="text"
                                             name="quantity"
                                             id="quantity"
                                             value={quantity}
                                             className="border-y-2 border-x-0 border-gray-400 h-8 w-11 text-center text-gray-800 ring-0 focus:ring-0 focus:border-gray-400"
                                             onChange={(e) => {
                                                validateNumber(e.target.value);
                                             }}
                                             onBlur={(e) => {
                                                validateQuantity(
                                                   e.target.value
                                                );
                                             }}
                                             onKeyDown={(e) => {
                                                e.preventDefault();
                                                handleQuantityButtonClick(
                                                   e.key
                                                );
                                             }}
                                          />
                                          <button
                                             className="border-2 border-gray-400 w-8 h-8 rounded-e-sm text-gray-500 hover:bg-slate-100"
                                             name="plus"
                                             onClick={(e) =>
                                                handleQuantityButtonClick(
                                                   e.target.name
                                                )
                                             }
                                          >
                                             +
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mt-2 w-full">
                                    <button
                                       type="button"
                                       value={{ ...product }}
                                       className="hover:duration-200 w-full inline-flex justify-center rounded-md bg-red-800 lg:px-16 px-4 py-2 text-base font-medium text-white hover:opacity-95 focus:outline-none"
                                       onClick={handleAddToCart}
                                    >
                                       Add to cart
                                    </button>
                                    <NavLink to={`/shop/detail/${product.id}`}>
                                       <p className="text-center text-red-800 mt-5 cursor-pointer">
                                          View full details
                                       </p>
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}
