/* eslint-disable react/prop-types */
const BooksDisplay = ({ books, deleteBooks }) => {
  console.log(books);

  return (
    <>
      {books.map((book) => {
        const {
          author, title, img, id,
        } = book;
        return (
          <ul key={id}>
            <li>
              <img src={img} alt={title} width="150px" />
              <h3>{title}</h3>
              <h4>{author}</h4>
              <button type="button" onClick={() => deleteBooks(id)}>
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
