import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Categories from './pages/Categories';
import SharedLayout from './components/SharedLayout';
import Error from './pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
