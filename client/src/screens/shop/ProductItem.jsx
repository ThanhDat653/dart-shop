import React, { useState } from "react";
import ProductQuickView from "./ProductQuickView";
import { useCart } from "../cart/CartReducer";

export const ProductItem = ({ dataProduct }) => {
   const { ...product } = dataProduct;
   const [openDetail, setOpenDetail] = useState(false);

   function handleSelectProduct(event) {
      setOpenDetail(!openDetail);
   }

   const productsInCart = useCart();
   localStorage.setItem("cart", JSON.stringify(productsInCart));

   return (
      <>
         <div
            key={product.id}
            className="group relative max-h-[370px] bg-slate-50 shadow-lg hover:shadow-xl py-4 rounded-sm transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={handleSelectProduct}
         >
            <div className="w-full h-4/6 flex items-center justify-center overflow-hidden rounded-md transition-all">
               <img
                  src={`./assets/images/${product.img}`}
                  alt={product.name}
                  className="w-full object-contain px-4 transition-all"
               />
            </div>
            <div className="mt-4 px-4 flex flex-col justify-between items-start">
               <h3 className="text-lg text-gray-800">{product.name}</h3>
               <p className="text-gray-400 font-normal">
                  Colour: {product.color}
               </p>
               <p className="mt-4 text-xl font-medium text-red-700">
                  ${product.price}
               </p>
            </div>
         </div>
         {openDetail && (
            <ProductQuickView
               product={product}
               isOpen={openDetail}
               setIsOpen={setOpenDetail}
            ></ProductQuickView>
         )}
      </>
   );
};
