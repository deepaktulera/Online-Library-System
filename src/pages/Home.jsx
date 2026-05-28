import React from 'react';
import data from '../utils/books.json'
import BookList from '../components/BookList';

const Home = () => {
  
  return (
    <div>
      <h1 className='text-center text-2xl font-bold'>{data.welcomeMessage}</h1>
      <BookList />
    </div>
  );
}

export default Home;
