import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/BookSlice';
import categoryReducer from '../features/category/CategorySlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
