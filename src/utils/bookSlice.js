import { createSlice } from "@reduxjs/toolkit";
import data from "./books.json";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: data.books
  },
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;