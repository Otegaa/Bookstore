import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/BookSlice';

const BookForm = () => {
  const { books } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.trim() && author.trim() && category.trim()) {
      dispatch(
        addBook({
          id: `item${books.length + 1}`,
          title: book,
          author,
          category,
        }),
      );
      setBook('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <form>
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
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Add book
      </button>
    </form>
  );
};

export default BookForm;
