import React from "react";
import data from "../utils/books.json";
import BookList from "../components/BookList";

// Home Page of the webpage
const Home = () => {
  return (
    <div>
      {/* Here welcome message are showing */}
      <h1 className="text-center text-2xl py-3 font-bold">
        {data.welcomeMessage}
      </h1>

      {/* Here all books are showing */}
      <BookList />
    </div>
  );
};

export default Home;
