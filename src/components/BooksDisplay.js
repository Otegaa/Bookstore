import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks, removeBooks, deleteBooks } from '../redux/books/BookSlice';

const BooksDisplay = () => {
  const { books, loading, error } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <div>
        {loading && <div>Loading...</div>}
        {!loading && error ? (
          <div>
            Error:
            {error}
          </div>
        ) : null}
        {!loading && books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <li style={{ marginBottom: '2rem' }} key={book.item_id}>
                <h2 style={{ fontSize: '2.5rem' }}>{book.title}</h2>
                <h4 style={{ fontSize: '2rem' }}>{book.author}</h4>
                <h4 style={{ fontSize: '2rem' }}>{book.category}</h4>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeBooks(book.item_id));
                    dispatch(deleteBooks(book.item_id));
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default BooksDisplay;
