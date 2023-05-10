import { createSlice } from '@reduxjs/toolkit';
import booksList from '../../components/data';

const initialState = {
  books: booksList,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    removeBooks: (state, { payload }) => {
      state.books = state.books.filter((book) => book.id !== payload);
    },
  },
});

export const { addBook, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;
