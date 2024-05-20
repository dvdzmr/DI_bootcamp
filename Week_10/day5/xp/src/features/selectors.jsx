import { createSelector } from '@reduxjs/toolkit';
import { selectBooks } from './booksSlice';

export const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Horror')
);

export const selectHistoricalFiction = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'HistoricalFiction')
);

export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'ScienceFiction')
);

export const selectRomanceBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Romance')
);

export const selectMysteryBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Mystery')
);

export const selectNonFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'NonFiction')
);