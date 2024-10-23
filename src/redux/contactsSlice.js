import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContactThunk,
  addContactThunk,
} from "./contactsOps";

export const initialState = {
  items: [],
  searchStr: "",
  isLoading: false,
  isError: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
       .addMatcher(isAnyOf(fetchContacts.rejected, deleteContactThunk.rejected, addContactThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export  const contactsReducer= contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;