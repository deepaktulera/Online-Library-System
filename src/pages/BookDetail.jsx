import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Here single book details are showing
const BookDetail = () => {
  // Get id from route params
  const { id } = useParams();

  // Get all books from redux store
  const books = useSelector((state) => state.books.books);

  // Find single book according to id
  const singleBook = books.find((item) => String(item.id) === String(id));

  // If book not found show message
  if (!singleBook) {
    return <h1>Book Not Found</h1>;
  }

  return (
    <div className="h-auto flex flex-col justify-center py-3 items-center">
      {/* Main book container */}
      <div className="flex flex-col gap-4 p-4 w-fit rounded-2xl justify-center items-center">
        {/* Book Image */}
        <img
          src={singleBook.image}
          alt=""
          className="w-80 h-80 object-contain object-center hover:shadow-emerald-300 hover:scale-105 transition-all duration-1000 shadow-xl rounded-4xl"
        />

        {/* Book Details */}
        <div className="flex flex-col items-center gap-4 justify-center">
          <h1>
            <strong>Title :- </strong>
            {singleBook.title}
          </h1>

          <h1>
            <strong>Author :- </strong>
            {singleBook.author}
          </h1>

          <p>
            <strong>Description :- </strong>
            {singleBook.description}
          </p>

          <h3>
            <strong>Category :- </strong>
            {singleBook.category}
          </h3>

          <h3>
            <strong>Rating :- </strong>
            {singleBook.rating}
          </h3>
        </div>
      </div>

      {/* Navigate back to browse page */}
      <Link
        to={"/browse_books"}
        className="mt-6 px-8 py-4 rounded-full font-semibold text-lg bg-linear-to-r from-green-400 to-emerald-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-105 transition-all duration-300"
      >
        Back To Browser
      </Link>
    </div>
  );
};

export default BookDetail;
