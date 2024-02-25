import React from "react";

const CartItem = ({ product, handleSelected }) => {
   const [quantity, setQuantity] = React.useState(product.quantity);

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

   return (
      <li className="flex w-full items-center space-x-2 sm:space-x-5 lg:py-3 lg:px-7 border-b border-x last:border-t-0">
         <input
            type="checkbox"
            name={product.id}
            id={product.id}
            className="h-4 w-4 rounded-sm border-gray-400 text-indigo-700 focus:ring-indigo-700 cursor-pointer"
            onChange={(e) => {
               handleSelected(product);
            }}
         />
         <div className="flex flex-row justify-center items-center w-full space-x-5 md:max-w-[60%]">
            <img
               className="flex-shrink-0 object-cover md:w-28 md:h-28 border-transparent rounded outline-none bg-gray-500 md:ml-4"
               src={`./assets/images/${product.img}`}
               alt="Polaroid camera"
            />
            <div className="space-y-2 flex-1">
               <h3 className="text-base font-semibold sm:pr-8 text-gray-800 line-clamp-2">
                  {product.name}
               </h3>
               <p className="text-sm text-gray-500">Colour: {product.color}</p>
            </div>
         </div>

         <div className="flex flex-col justify-center">
            <div className="flex justify-center items-center w-full pb-2 space-x-10">
               <div className="text-center md:w-24 md:pr-5">
                  <p className="text-base font-medium text-gray-700">
                     ${product.price}
                  </p>
               </div>
               <div className="flex items-center md:pl-6">
                  <button
                     className="border-2 border-gray-400 w-8 h-8 rounded-s-sm text-gray-500 hover:bg-slate-100"
                     name="minus"
                     onClick={(e) => handleQuantityButtonClick(e.target.name)}
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
                        validateQuantity(e.target.value);
                     }}
                     onKeyDown={(e) => {
                        e.preventDefault();
                        handleQuantityButtonClick(e.key);
                     }}
                  />
                  <button
                     className="border-2 border-gray-400 w-8 h-8 rounded-e-sm text-gray-500 hover:bg-slate-100"
                     name="plus"
                     onClick={(e) => handleQuantityButtonClick(e.target.name)}
                  >
                     +
                  </button>
               </div>
               <div className="text-right md:w-24">
                  <p className="text-base font-medium text-rose-700">
                     ${product.price * quantity}
                  </p>
               </div>
            </div>
         </div>
      </li>
   );
};

export default CartItem;
