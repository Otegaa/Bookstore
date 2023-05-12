import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = ' https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const appId = 'hdYVDIhRkCXTLriBlu9I';

export const fetchBooksFromAPI = createAsyncThunk(
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

export const postBooksToAPI = createAsyncThunk(
  'book/postBooks',
  async (book, thunkAPI) => {
    try {
      const res = await axios.post(`${baseUrl}${appId}/books`, book);
      const data = await res.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteBooksFromAPI = createAsyncThunk(
  'book/deleteBooks',
  async (bookId, thunkAPI) => {
    try {
      const res = axios.delete(`${baseUrl}${appId}/books/${bookId}
     `);
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
    addBookToUI: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    removeBooksFromUI: (state, { payload }) => {
      state.books = state.books.filter((book) => book.item_id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksFromAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooksFromAPI.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.books = payload;
        state.error = '';
      })
      .addCase(fetchBooksFromAPI.rejected, (state, action) => {
        state.loading = false;
        state.books = [];
        state.error = action.error.message;
      });
  },
});

export const { addBookToUI, removeBooksFromUI } = bookSlice.actions;
export default bookSlice.reducer;
