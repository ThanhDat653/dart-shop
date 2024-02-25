import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlide";
import filtersSlide from "../slices/filtersSlide";
import cartSlide from "../slices/cartSlide";

const store = configureStore({
   reducer: {
      products: productSlice.reducer,
      filters: filtersSlide.reducer,
      cart: cartSlide.reducer,
   },
});

export default store;
