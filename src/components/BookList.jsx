import React, { useState } from 'react';
import data from '../utils/books.json'
import Book from './Book';

const BookList = () => {

  return (
    <div className='h-full w-full flex flex-wrap justify-evenly gap-5 pt-10'>
      {data.books.map((item) => (
        <Book key={item.id} data={item} />
      ))}
    </div>
  );
}

export default BookList;
