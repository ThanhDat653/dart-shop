import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
   name: "cart",
   initialState: localStorage.getItem("cart") || [],
   reducers: {
      addToCart: (state, action) => {
         if (state.find((item) => item.id === action.payload.id))
            state.forEach((item) => {
               if (item.id === action.payload.id) {
                  item.quantity = item.quantity + action.payload.quantity;
               }
            });
         else state.unshift(action.payload);
         localStorage.setItem("cart", JSON.stringify(state));
      },
      removeFromCart: (state, action) => {
         state.filter((item) => {
            return item.id !== action.payload;
         });
      },
   },
});

export default cartSlide;
