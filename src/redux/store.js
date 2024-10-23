import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import searchFilterReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: searchFilterReducer,
  },
});
