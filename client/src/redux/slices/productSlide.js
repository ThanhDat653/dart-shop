import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
   name: "products",
   initialState: [
      {
         name: "Jordan Delta 3 Mid",
         type: "jd3",
         id: "jd3-black",
         color: "black",
         size: ["37", "38", "39", "40", "41", "42", "43"],
         price: 400,
         img: "jordan_delta_3_black.png",
         desc: "Inspired by '90s on-court gear and the Space-Age aesthetic, the Delta 3 is ready to launch. With super-lightweight technical materials, they have a retro-futuristic look and feel. This is the next-gen footwear that's gonna take you into tomorrow",
      },

      {
         name: "Jordan Delta 3 Mid",
         type: "jd3",
         id: "jd3-khaki",
         color: "khaki",
         size: ["37", "38"],
         price: 400,
         img: "jordan_delta_3_khaki.png",
         desc: "Inspired by '90s on-court gear and the Space-Age aesthetic, the Delta 3 is ready to launch. With super-lightweight technical materials, they have a retro-futuristic look and feel. This is the next-gen footwear that's gonna take you into tomorrow",
      },

      {
         name: "Air Jordan 1",
         type: "jd1",
         id: "jd1-white",
         color: "white",
         size: ["37", "38", "39", "41", "42"],
         price: 199,
         img: "jordan_1_black_white.png",
         desc: "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
      },

      {
         name: "Air Jordan 1",
         type: "jd1",
         id: "jd1-yellow",
         color: "yellow",
         size: ["37", "38", "39"],
         price: 99,
         img: "jordan_1_yellow.png",
         desc: "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
      },

      {
         name: "Air Jordan 1",
         type: "jd1",
         id: "jd1-orange",
         color: "orange",
         size: ["37", "38", "39", "41", "42"],
         price: 89,
         img: "jordan_1_orange.png",
         desc: "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
      },

      {
         name: "Air Jordan 1",
         type: "jd1",
         id: "jd1-violet",
         color: "violet",
         size: ["37", "38", "39", "41", "42"],
         price: 189,
         img: "jordan_1_violet.png",
         desc: "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
      },

      {
         name: "Nike Air Max 270",
         type: "AirMax",
         id: "AM270-white-black",
         color: "white-black",
         size: ["37", "38", "39"],
         price: 399,
         img: "nike_airmax_270_white_black.png",
         desc: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
      },

      {
         name: "Nike Air Max 270",
         type: "AirMax",
         id: "AM270-white",
         color: "white",
         size: ["37", "38", "39", "41", "43"],
         price: 399,
         img: "nike_airmax_270_white.png",
         desc: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
      },

      {
         name: "Nike Air Max 270",
         type: "AirMax",
         id: "AM270-black",
         color: "black",
         size: ["37", "38", "39", "41", "42"],
         price: 419,
         img: "nike_airmax_270_black.png",
         desc: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
      },
   ],
   reducers: {
      addTodo: (state, action) => {
         state.push(action.payload);
      },

      toggleCompleted: (state, action) => {
         const currentTodo = state.find((todo) => todo.id === action.payload);
         currentTodo.completed = !currentTodo.completed;
      },
   },
});

export default productSlice;
