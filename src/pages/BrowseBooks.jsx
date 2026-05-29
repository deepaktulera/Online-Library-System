import React, { useState } from "react";
import { useSelector } from "react-redux";
import Book from "../components/Book";

const BrowseBooks = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const books = useSelector((state) => state.books.books);

  const filteredBooks = books.filter((item) => {
    const categoryMatch = category === "" || item.category === category;

    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const categories = [
    ...new Set(books.map((item) => item.category).filter(Boolean)),
  ];

  return (
    <div>
      <div className="flex justify-center mt-2">
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg min-w-52"
        />
      </div>

      <div className="flex flex-wrap justify-evenly pb-4 py-2 text-xl font-semibold overflow-x-auto">
        <button
          className="mt-6 px-3 py-2 rounded-full font-semibold text-lg bg-linear-to-r from-green-400 to-emerald-600 text-white"
          onClick={() => setCategory("")}
        >
          All
        </button>

        {categories.map((item) => {
          return (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className="mt-6 px-3 py-2 rounded-full font-semibold text-lg bg-linear-to-r from-green-400 to-emerald-600 text-white"
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="flex justify-evenly flex-wrap gap-4">
        {filteredBooks.map((item) => {
          return <Book key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default BrowseBooks;
