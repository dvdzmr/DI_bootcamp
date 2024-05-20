import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../features/booksSlice';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks, selectRomanceBooks, selectMysteryBooks, selectNonFictionBooks, selectHistoricalFiction } from '../features/selectors';


const BookList = () => {
  const [genre, setGenre] = useState('All');
  const books = useSelector(selectBooks);
  const genreRomance = useSelector(selectRomanceBooks);
  const genreHorror = useSelector(selectHorrorBooks);
  const genreScienceFiction = useSelector(selectScienceFictionBooks);
  const genreNonFiction = useSelector(selectNonFictionBooks);
  const genreFantasy = useSelector(selectFantasyBooks);
  const genreMysteryPuzzle = useSelector(selectMysteryBooks);
  const genreHistoricalFiction = useSelector(selectHistoricalFiction);

  const getBooksByGenre = () => {
    switch (genre) {
      case 'Romance':
        return genreRomance;
      case 'Horror':
        return genreHorror;
      case 'ScienceFiction':
        return genreScienceFiction;
      case 'NonFiction':
        return genreNonFiction;
      case 'Fantasy':
        return genreFantasy;
      case 'Mystery':
        return genreMysteryPuzzle;
      case 'HistoricalFiction':
        return genreHistoricalFiction;
      default:
        return books;
    }
  };

  return (
    <div className="book-list-container">
      <h1>Available Books</h1>
      <h4>Browse by genre:</h4>
      <select onChange={(e) => setGenre(e.target.value)} value={genre}>
        <option value="All">All</option>
        <option value="Romance">Romance</option>
        <option value="Horror">Horror</option>
        <option value="ScienceFiction">Science Fiction</option>
        <option value="NonFiction">Non Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Mystery">Mystery</option>
        <option value="HistoricalFiction">Historical Fiction</option>
      </select>
      <ul>
        {getBooksByGenre().map((book) => (
          <li key={book.id} style={{ listStyleType: "none" }} >
           "{book.title}" written by {book.author} (genre: {book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;