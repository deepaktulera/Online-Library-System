import React, { useState } from "react";
import { useSelector } from "react-redux";
import Book from "../components/Book";
import { useParams, Link } from "react-router-dom";

// Here You can see all the books
const BrowseBooks = () => {
  // Get category from route params
  const params = useParams();

  // Store current category
  const category = params.category || "";

  // Create the search state variable
  const [search, setSearch] = useState("");

  // Get all books from redux store
  const books = useSelector((state) => state.books.books);

  // Here books are filter according to category and search
  const filteredBooks = books.filter((item) => {
    // Check category match
    const categoryMatch = category === "" || item.category === category;

    // Check search match with title and author
    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase());

    // Return both matches
    return categoryMatch && searchMatch;
  });

  // Here all unique categories are comming
  const categories = [
    ...new Set(books.map((item) => item.category).filter(Boolean)),
  ];

  return (
    <div>
      {/* Search Input Box */}
      <div className="flex justify-center mt-2">
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg min-w-52"
        />
      </div>

      {/* Here all category buttons are showing */}
      <div className="flex flex-wrap justify-evenly pb-4 py-2 text-xl font-semibold overflow-x-auto">
        {/* Show all books button */}
        <Link
          to="/browse_books"
          className="mt-6 px-3 py-2 rounded-full font-semibold text-lg bg-linear-to-r from-green-400 to-emerald-600 text-white"
        >
          All
        </Link>

        {/* Here categories are mapping */}
        {categories.map((item) => {
          return (
            <Link
              to={`/browse_books/${item}`}
              key={item}
              className="mt-6 px-3 py-2 rounded-full font-semibold text-lg bg-linear-to-r from-green-400 to-emerald-600 text-white"
            >
              {item}
            </Link>
          );
        })}
      </div>

      {/* Here all filtered books are showing */}
      <div className="flex justify-evenly flex-wrap gap-4">
        {filteredBooks.map((item) => {
          return <Book key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default BrowseBooks;
