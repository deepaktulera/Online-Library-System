import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

// Here all books are showing
const BookList = () => {
  // Get all books from redux store
  const books = useSelector((state) => state.books.books);

  return (
    // Here books are mapping
    <div className="h-full w-full flex flex-wrap justify-evenly gap-5 pt-10">
      {books.map((item) => (
        <Book key={item.id} data={item} />
      ))}
    </div>
  );
};

export default BookList;
