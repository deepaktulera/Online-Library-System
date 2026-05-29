import { createSlice } from "@reduxjs/toolkit";
import data from "./books.json";

// create the book slice for add book
const bookSlice = createSlice({
  // Slice name
  name: "books",

  // Initial redux state
  initialState: {
    books: data.books,
  },

  // All reducers are here
  reducers: {
    // Add new book reducer
    addBook: (state, action) => {
      // Add new book in starting of array
      state.books.unshift(action.payload);
    },
  },
});

// Export reducer actions
export const { addBook } = bookSlice.actions;

// Export reducer
export default bookSlice.reducer;
