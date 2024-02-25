import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCart } from "./CartReducer";

function CartModal({ closeModal }) {
   const productsInCart = useCart();
   
   return (
      <div
         className="flex flex-col max-w-md p-6 space-y-4 sm:p-6 rounded-lg bg-white text-gray-00 absolute right-0 top-[80%] shadow-[0_5px_15px_0_rgba(0,0,0,0.5)] z-10"
         onClick={(e) => {
            e.stopPropagation();
         }}
      >
         <h2 className="text-xl font-semibold">Your cart</h2>
         <ul className="flex flex-col divide-y divide-gray-200 md:w-96">
            {productsInCart.length !== 0 ? (
               productsInCart.map((product, index) => {
                  if (index < 3)
                     return (
                        <li
                           className="flex flex-col py-2 sm:flex-row sm:justify-between"
                           key={product.id}
                        >
                           <div className="flex w-full space-x-2 sm:space-x-4">
                              <img
                                 className="flex-shrink-0 object-cover w-16 h-16 border-transparent rounded outline-none sm:w-[80px] sm:h-[80px] bg-gray-500"
                                 src={`./assets/images/${product.img}`}
                                 alt="Polaroid camera"
                              />
                              <div className="flex flex-col justify-center w-full">
                                 <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                       <h3 className="text-base font-semibold leadi sm:pr-8 text-gray-800">
                                          {product.name}
                                       </h3>
                                       <p className="text-sm text-gray-500">
                                          Color: {product.type}
                                       </p>
                                    </div>
                                    <div className="text-right">
                                       <p className="text-base font-medium text-rose-700">
                                          ${product.price}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                     );
                  return false;
               })
            ) : (
               <p className="text-base text-gray-400 text-center tracking-tight mb-1">
                  Your shopping cart is emty
               </p>
            )}
         </ul>
         <div className="flex flex-col w-full">
            {productsInCart.length > 3 && (
               <p className="text-sm text-gray-400 tracking-tight mb-1">
                  {productsInCart.length - 3} more product{" "}
                  {productsInCart.length - 3 > 1 ? "s" : ""} in cart
               </p>
            )}
            <Link to="/cart" id="view-cart" className="z-10">
               <button
                  type="button"
                  onClick={closeModal}
                  className="w-full py-2 border rounded-md bg-blue-600 text-white my-2 hover:opacity-95"
               >
                  View Cart
               </button>
            </Link>
         </div>
      </div>
   );
}

export default CartModal;
