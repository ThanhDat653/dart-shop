import { createSelector } from "reselect";

export const productListSelector = (state) => state.products;
export const searchTextSelector = (state) => state.filters.searchText;
export const colorFilterSelector = (state) => state.filters.color;
export const sizeFilterSelector = (state) => state.filters.size;
export const categoryFilterSelector = (state) => state.filters.category;
export const cartSelector = (state) => state.cart;

export const productsRemainingSelector = createSelector(
   productListSelector,
   searchTextSelector,
   colorFilterSelector,
   sizeFilterSelector,
   categoryFilterSelector,
   (products, searchText, color, size, category) => {
      function filterByColor(product) {
         return color.includes(product.color);
      }

      function filterBySize(product) {
         return product.size.find((sizeAvailable) =>
            size.includes(sizeAvailable)
         );
      }

      function filterByCategory(product) {
         if (category)
            return (
               category.find((category) => category === product.category) !== -1
            );
         else return true;
      }

      return products.filter((product) => {
         return (
            product.name
               .toLocaleLowerCase()
               .includes(searchText.toLocaleLowerCase()) &&
            (color.length ? filterByColor(product) : true) &&
            (size.length ? filterBySize(product) : true)
            // &&
            // (category ? filterByCategory(product) : product)
         );
      });
   }
);

export const cartList = createSelector(cartSelector, (cart) => {
   return cart;
});
