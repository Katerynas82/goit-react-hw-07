import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchStr:'',
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchContact: (state, action) => {
      state.searchStr = action.payload;
    },
  },
});

export const { searchContact } = filtersSlice.actions;
export const selectSearchStr = (state) => state.filters.searchStr;
export default filtersSlice.reducer;


