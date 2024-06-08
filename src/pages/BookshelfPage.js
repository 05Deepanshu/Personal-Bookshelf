import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <Bookshelf bookshelf={bookshelf} />
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default BookshelfPage;
