import { useSelector, useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/BookSlice';

const BooksDisplay = () => {
  const { books } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  return (
    <>
      {books.map((book) => {
        const {
          author, title, id, category,
        } = book;
        return (
          <ul key={id}>
            <li style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem' }}>{title}</h2>
              <h4 style={{ fontSize: '2rem' }}>{author}</h4>
              <h4 style={{ fontSize: '2rem' }}>{category}</h4>
              <button type="button" onClick={() => dispatch(removeBooks(id))}>
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default BooksDisplay;
