import { Route, Routes } from 'react-router-dom';
import './index.css';
import BookList from './pages/BookList';
import Categories from './pages/Categories';
import SharedLayout from './components/SharedLayout';
import Error from './pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<BookList />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
