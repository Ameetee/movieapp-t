  import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, { ...movie, id: prevMovies.length + 1 }]);
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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Movie Management</h1>
        </header>
        <Routes>
          <Route path="/" element={<>
            <AddMovieForm addMovie={addMovie} />
            <Filter
              title={filterTitle}
              rate={filterRating}
              onTitleChange={handleTitleChange}
              onRateChange={handleRateChange}
            />
            <MovieList movies={getFilteredMovies()} />
          </>} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
