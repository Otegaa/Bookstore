import { useState } from 'react';
import booksList from '../components/data';
import BooksDisplay from '../components/BooksDisplay';
import BookForm from '../components/BookForm';

const BookList = () => {
  const [books, setBooks] = useState(booksList);

  const deleteBooks = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <>
      <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Books</h1>
      <BooksDisplay books={books} deleteBooks={deleteBooks} />
      <BookForm setBooks={setBooks} />
    </>
  );
};

export default BookList;
