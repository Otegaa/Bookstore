import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const BookForm = ({ setBooks }) => {
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.trim() && author.trim()) {
      setBooks((prevState) => [...prevState, { title: book, author, id: 4 }]);
      setBook('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Book</h2>
      <input
        type="text"
        placeholder="Book title"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add book</button>
    </form>
  );
};

export default BookForm;
