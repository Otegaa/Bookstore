import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToUI, postBooksToAPI } from '../redux/books/BookSlice';

const BookForm = () => {
  const { books, loading, error } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.trim() && author.trim() && category.trim() && !loading && !error) {
      const newBook = {
        item_id: `item${books.length + 1}`,
        title: book,
        author,
        category,
      };
      dispatch(addBookToUI(newBook));
      dispatch(postBooksToAPI(newBook));
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
