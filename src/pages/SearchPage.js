import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem('bookshelf')) || []
  );

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="search-page">
      <h1>Book Search</h1>
      <Search addToBookshelf={addToBookshelf} />
      <Link to="/bookshelf">Go to My Bookshelf</Link>
    </div>
  );
};

export default SearchPage;
