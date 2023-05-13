import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchBooksFromAPI,
  removeBooksFromUI,
  deleteBooksFromAPI,
} from '../redux/books/BookSlice';
import styles from '../styles/BooksDisplay.module.css';

const BooksDisplay = () => {
  const { books, loading, error } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksFromAPI());
  }, [dispatch]);

  return (
    <>
      <div className={styles.wrapper}>
        {loading && <div className={styles.loading}>Loading...</div>}
        {!loading && error ? (
          <div className={styles.error}>
            Error:
            {error}
          </div>
        ) : null}
        {!loading && books.length > 0 ? (
          <div>
            {books.map((book) => (
              <ul key={book.item_id}>
                <li className={styles.item}>
                  <div>
                    <div className={styles.main}>
                      <h4 className={styles.category}>{book.category}</h4>
                      <h2 className={styles.title}>{book.title}</h2>
                      <h4 className={styles.author}>{book.author}</h4>
                    </div>
                    <div className={styles.button}>
                      <button type="button" className={styles.comments}>
                        Comments
                      </button>
                      <span className={styles.span} />
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(removeBooksFromUI(book.item_id));
                          dispatch(deleteBooksFromAPI(book.item_id));
                        }}
                        className={styles.remove}
                      >
                        Remove
                      </button>
                      <span className={styles.span} />
                      <button type="button" className={styles.edit}>
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className={styles.progress}>
                    <div className={styles.bar} />
                    <div>
                      <p className={styles.number}>50%</p>
                      <p className={styles.text}>Completed</p>
                    </div>
                    <span className={styles.span2} />
                  </div>
                  <div className={styles.chapter}>
                    <p className={styles.current}>Current chapter</p>
                    <p className={styles.currentNumber}>Chapter 17</p>
                    <button type="button" className={styles.update}>
                      update progress
                    </button>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default BooksDisplay;
