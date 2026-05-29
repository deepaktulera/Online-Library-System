import React, { useState } from "react";
import { Link } from "react-router-dom";

// Here single book card are showing
const Book = (props) => {
  // Loading state for image skeleton
  const [loading, setLoading] = useState(true);

  console.log(props.data.image);

  return (
    <div>
      {/* Main book card container */}
      <div className="relative w-full p-4 m-auto rounded-3xl transition-all hover:scale-105 hover:shadow-emerald-300 hover:shadow-2xl duration-700">
        {/* Show skeleton while image loading */}
        {loading && (
          <div className="absolute w-62 h-62 animate-pulse bg-gray-300 rounded-2xl"></div>
        )}

        {/* Book image */}
        <img
          src={props.data.image}
          alt={props.data.title}
          className="w-62 h-62 object-contain"
          loading="lazy"
          onLoad={() => setLoading(false)}
        />

        {/* Book details */}
        <div className="w-full flex flex-col items-center overflow-x-auto">
          {/* Book title */}
          <h1 className="text-center text-sm font-light overflow-x-auto">
            {props.data.title}
          </h1>

          {/* Small by text */}
          <span>
            <strong>by</strong>
          </span>

          {/* Author name */}
          <h1 className="text-center text-sm font-light overflow-x-auto">
            {props.data.author}
          </h1>

          {/* Navigate to detail page */}
          <Link
            to={`/book_detail/${props.data.id}`}
            className="my-2 px-2 py-1 rounded-full font-semibold text-lg bg-linear-to-r from-green-400 to-emerald-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-105 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
