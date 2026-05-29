import React, { useState } from 'react';
import data from '../utils/books.json';
import Book from '../components/Book';

const BrowseBooks = () => {

  const [category, setCategory] = useState("");

  const filteredBooks =
    category === ""
      ? data.books
      : data.books.filter((item) => item.category === category);

  return (
    <div>
      <div className='flex justify-evenly pb-4 py-2 text-xl font-semibold overflow-x-auto'>

        <button className='shadow-2xs shadow-red-500 hover:scale-90 transition-all duration-300' onClick={() => setCategory("")}>
          All
        </button>

        {data.categories.map((item) => {
          return (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className='shadow-2xs shadow-red-500 hover:scale-90 transition-all duration-300'
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Books */}
      <div className='flex justify-evenly flex-wrap gap-4'>
        {filteredBooks.map((item) => {
          return (
            <Book key={item.id} data={item} />
          );
        })}
      </div>

    </div>
  );
};

export default BrowseBooks;