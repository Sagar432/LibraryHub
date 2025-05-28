import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
    setBooks: (state, action) => {
      state.list = action.payload;
    },
    // removeBook: (state, action) => {
    //   state.list = state.list.filter((book) => book.id !== action.payload);
    // },
    // updateBook: (state, action) => {
    //   const index = state.list.findIndex(
    //     (book) => book.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.list[index] = action.payload;
    //   }
    // },
  },
});
export const { addBook, setBooks } = booksSlice.actions;
export default booksSlice.reducer;
