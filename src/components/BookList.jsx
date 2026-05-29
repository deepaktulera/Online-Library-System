import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

const BookList = () => {

  const books = useSelector((state) => state.books.books);

  return (
    <div className="h-full w-full flex flex-wrap justify-evenly gap-5 pt-10">
      {books.map((item) => (
        <Book key={item.id} data={item} />
      ))}
    </div>
  );
};

export default BookList;