import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-details">
      <button onClick={() => navigate('/')}>Back to Home</button>
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      {movie.trailerLink && (
        <div>
          <h2>Trailer</h2>
          <iframe
            width="560"
            height="315"
            src={movie.trailerLink}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
