import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  return (
    <div className="text-center">
      {props.movies.map(movie => (
        <MovieCard
          key={movie.key}
          imdbID={movie.imdbID}
          title={movie.Title}
          posterUrl={movie.Poster}
          saveMovie={props.saveMovie}
        />
      ))}
    </div>
  )
}

export default MovieList;
