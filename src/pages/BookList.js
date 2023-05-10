import BooksDisplay from '../components/BooksDisplay';
import BookForm from '../components/BookForm';

const BookList = () => (
  <>
    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Books</h1>
    <BooksDisplay />
    <BookForm />
  </>
);

export default BookList;
