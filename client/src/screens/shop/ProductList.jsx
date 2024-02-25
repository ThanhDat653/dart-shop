import { productsRemainingSelector } from "../../redux/selectors";
import { ProductItem } from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList() {
   const productList = useSelector(productsRemainingSelector);

   return (
      <div className="bg-transparent">
         <div className="mx-auto lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-5">
               {productList.length !== 0 ? (
                  productList.map((product) => (
                     <ProductItem
                        dataProduct={product}
                        key={product.id}
                     ></ProductItem>
                  ))
               ) : (
                  <p className="flex items-center justify-center text-gray-400 col-span-3 text-lg mt-3">
                     Can't find a product :(
                  </p>
               )}
            </div>
         </div>
      </div>
   );
}

export default ProductList;
