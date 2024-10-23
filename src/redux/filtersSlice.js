import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    searchContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const searchFilterReducer = filtersSlice.reducer;
export const { searchContact } = filtersSlice.actions;
export const selectSearchStr = (state) => state.filters.searchStr;
export default filtersSlice.reducer;
