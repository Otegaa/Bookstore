import { useSelector } from 'react-redux';

/* eslint-disable react/prop-types */
const BooksDisplay = () => {
  const { books } = useSelector((store) => store.book);
  console.log(books);
  return (
    <>
      {books.map((book) => {
        const { author, title, id } = book;
        return (
          <ul key={id}>
            <li style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem' }}>{title}</h2>
              <h4 style={{ fontSize: '2rem' }}>{author}</h4>
              <button type="button">Delete</button>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default BooksDisplay;
