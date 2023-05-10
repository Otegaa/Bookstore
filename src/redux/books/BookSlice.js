import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    removeBooks: (state, { payload }) => {
      state.books = state.books.filter((book) => book.id !== payload);
    },
  },
});

export const { addBook, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;
