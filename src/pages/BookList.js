import { useState } from 'react';
import booksList from '../components/data';
import BooksDisplay from '../components/BooksDisplay';

const BookList = () => {
  const [books, setBooks] = useState(booksList);

  const deleteBooks = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <>
      <h1>Books</h1>
      <BooksDisplay books={books} deleteBooks={deleteBooks} />
    </>
  );
};

export default BookList;
