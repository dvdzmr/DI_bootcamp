import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'A tale of two cities', author: 'Charles Dickens', genre: 'HistoricalFiction' },
    { id: 2, title: 'THe little princess', author: 'Antoine de Saint-Exupéry', genre: 'Fantasy' },
    { id: 3, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fantasy' },
    { id: 4, title: 'Harry Potter and the Philosophers stone', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 5, title: 'And then there were none', author: 'Paulo Agatha Christie', genre: 'Mystery' },
    { id: 6, title: 'The Hobbit', author: 'J.R.R Tolkien', genre: 'Fantasy' },
    { id: 7, title: 'Catching Fire', author: 'Suzanne Collins', genre: 'ScienceFiction' },
    { id: 8, title: 'Andromeda Nebula', author: 'Ivan Yefremov', genre: 'ScienceFiction' },
    { id: 9, title: 'The exorcist', author: 'William Peter Blatty', genre: 'Horror' },
    { id: 10, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
    { id: 11, title: 'Tanakh', author: '', genre: 'NonFiction' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});


export const selectBooks = (state) => state.books.books;
export default booksSlice.reducer;