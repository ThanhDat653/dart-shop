import { createSlice } from "@reduxjs/toolkit";
const filtersSlide = createSlice({
   name: "filters",
   initialState: {
      searchText: "",
      category: [],
      color: [],
      size: [],
   },
   reducers: {
      searchFilterChange: (state, action) => {
         state.searchText = action.payload;
      },
      categoryFilterChange: (state, action) => {
         state.category = action.payload;
      },
      colorFilterChange: (state, action) => {
         state.color = action.payload;
      },
      sizeFilterChange: (state, action) => {
         state.size = action.payload;
      },
   },
});
export default filtersSlide;
