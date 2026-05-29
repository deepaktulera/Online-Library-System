import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BrowseBooks from "../pages/BrowseBooks";
import AddBook from "../pages/AddBook";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import BookDetail from "../pages/BookDetail";

// Here all routes are defined
const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout wrapper routes */}
      <Route element={<Layout />}>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Browse books route */}
        <Route path="/browse_books" element={<BrowseBooks />} />

        {/* Dynamic category route */}
        <Route path="/browse_books/:category" element={<BrowseBooks />} />

        {/* Add books route */}
        <Route path="/add_books" element={<AddBook />} />
      </Route>

      {/* Book detail route */}
      <Route path="/book_detail/:id" element={<BookDetail />} />

      {/* Not found route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
