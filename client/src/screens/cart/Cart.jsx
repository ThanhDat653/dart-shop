import React, { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "./CartReducer";

const Cart = () => {
   let productsInCart = useCart();
   let [selectedProducts, setSelectedProducts] = useState([]);

   let shippingCost = 8;
   let subTotal = selectedProducts.length
      ? selectedProducts.reduce(
           (total, product) => (total += product.price * product.quantity),
           0
        )
      : 0;

   function handleSelectProduct(product) {
      setSelectedProducts([...selectedProducts, product])
   }

   console.log(selectedProducts);

   return (
      <div className="container max-w-7xl mx-auto md:my-10 text-gray-700">
         <h1 className="lg:text-left lg:text-2xl font-semibold ">
            Shopping Cart
         </h1>
         <div className="lg:grid lg:grid-cols-4 md:gap-3 md:my-10">
            <div className="flex flex-col justify-start col-span-3 ">
               <div className="flex justify-between md:py-5 md:border md:px-7 md:mb-3 bg-white">
                  <div className="flex flex-row items-center">
                     <input
                        type="checkbox"
                        name="select-all"
                        id="select-all"
                        className="rounded-sm"
                     />
                     <label htmlFor="select-all" className="md:ml-5">
                        Select All
                     </label>
                  </div>
                  <button className="text-red-700 p-0 border-0 bg-transparent border-b border-transparent hover:underline transition-colors">
                     Remove
                  </button>
               </div>
               <div className="bg-white">
                  <ul className="flex w-full items-center space-x-2 sm:space-x-5 lg:py-3 lg:px-7 border-b border-x last:border-t-0">
                     <input
                        type="checkbox"
                        disabled
                        className="h-4 w-4 rounded-sm border-gray-300 "
                     />
                     <li className="text-gray-400 text-left flex-1 md:pl-4">
                        Product
                     </li>
                     <li className="text-gray-400 text-left w-40">Price</li>
                     <li className="text-gray-400 text-left w-24">Quantity</li>
                     <li className="text-gray-400 text-right w-24">
                        Total Price
                     </li>
                  </ul>
               </div>
               <ul className="bg-white">
                  {productsInCart.length ? (
                     productsInCart.map((product) => {
                        return (
                           <CartItem
                              key={product.id}
                              product={product}
                              handleSelected={handleSelectProduct}
                           ></CartItem>
                        );
                     })
                  ) : (
                     <p className="text-base text-gray-400 text-center tracking-tight mb-1 md:mt-10">
                        Your shopping cart is emty :(
                     </p>
                  )}
               </ul>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 h-fit">
               <h1 className="lg:text-left lg:text-base font-medium md:border-b md:p-5 text-gray-700 uppercase">
                  Order Summary
               </h1>
               <div className="md:px-6 md:pb-6">
                  <div className="md:border-b md:pb-6">
                     <div className="flex flex-row justify-between md:pt-6 text-gray-800">
                        <h3 className="font-medium">Subtotal:</h3>
                        <span>${subTotal.toFixed(2)}</span>
                     </div>

                     <div className="flex flex-row justify-between md:pt-2 text-gray-500">
                        <h3 className="font-medium">Shipping:</h3>
                        <span>${shippingCost}</span>
                     </div>
                  </div>
                  <div className="flex flex-row justify-between md:pt-6">
                     <h2 className="text-gray-800 uppercase font-semibold">
                        Total cost:{" "}
                     </h2>
                     <span className="text-rose-700">
                        ${(shippingCost + subTotal).toFixed(2)}
                     </span>
                  </div>

                  <button
                     type="button"
                     className="w-full py-2 border rounded-md bg-red-700 text-white hover:opacity-95 md:mt-5"
                  >
                     Checkout
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
