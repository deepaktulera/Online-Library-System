import React, { useState } from 'react';
import data from '../utils/books.json'
import Book from './Book';

const BookList = () => {

  return (
    <div className='flex flex-wrap justify-around gap-5 pt-4'>
      {data.books.map((item) => (
        <Book key={item.id} data={item} />
      ))}
    </div>
  );
}

export default BookList;
