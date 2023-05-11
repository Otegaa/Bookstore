import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = ' https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const appId = 'hdYVDIhRkCXTLriBlu9I';

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async (thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}${appId}/books`);
      const data = Object.keys(res.data).map((key) => ({
        item_id: key,
        ...res.data[key][0],
      }));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const postBooks = createAsyncThunk(
  'book/postBooks',
  async (initialBook, thunkAPI) => {
    try {
      console.log(initialBook);
      const res = await axios.post(`${baseUrl}${appId}/books`, initialBook);
      const data = await res.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  books: [],
  error: '',
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.books = payload;
        state.error = '';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.books = [];
        state.error = action.error.message;
      })
      .addCase(postBooks.fulfilled, (state, { payload }) => {
        state.books = { ...state.books, payload };
      });
  },
});

export const { addBook, removeBooks } = bookSlice.actions;
export default bookSlice.reducer;
