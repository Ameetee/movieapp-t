import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailerLink, setTrailerLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating, trailerLink });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
    setTrailerLink('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Trailer Link (Embed URL)"
        value={trailerLink}
        onChange={(e) => setTrailerLink(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
