import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

// Configure the redux store
const store = configureStore({
  // All reducers are here
  reducer: {
    // Book reducer
    books: bookReducer,
  },
});

// Export store
export default store;
