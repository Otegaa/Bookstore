import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/BookSlice';

const BooksDisplay = () => {
  const { books, loading, error } = useSelector((store) => store.book);
  // const keys = Object.entries(books);
  // console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

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
            {books.map((book) => {
              const {
                item_id: id, title, author, category,
              } = book;
              return (
                <li style={{ marginBottom: '2rem' }} key={id}>
                  <h2 style={{ fontSize: '2.5rem' }}>{title}</h2>
                  <h4 style={{ fontSize: '2rem' }}>{author}</h4>
                  <h4 style={{ fontSize: '2rem' }}>{category}</h4>
                  <button type="button">Delete</button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default BooksDisplay;
