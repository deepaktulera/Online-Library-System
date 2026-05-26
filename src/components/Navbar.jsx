import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to={'/'} >Home</Link>
        <Link to={'/browse_books'} >Browse Books</Link>
        <Link to={'/add_books'} >Add Books</Link>
    </nav>
  );
}

export default Navbar;
