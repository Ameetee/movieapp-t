import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const handleTitleChange = (title) => {
    setFilterTitle(title);
  };

  const handleRateChange = (rating) => {
    setFilterRating(rating);
  };

  const getFilteredMovies = () => {
    return movies.filter((movie) => {
      return (
        (!filterTitle || movie.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
        (!filterRating || movie.rating >= filterRating)
      );
    });
  };

  return (
    <div className="App">
      <h1>Movie Management</h1>
      <AddMovieForm addMovie={addMovie} />
      <Filter
        title={filterTitle}
        rate={filterRating}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <MovieList movies={getFilteredMovies()} />
    </div>
  );
}

export default App;
