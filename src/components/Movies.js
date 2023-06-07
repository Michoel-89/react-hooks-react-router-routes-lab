import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => {
      return (
      <div key={movie.time}>
      <h2>{movie.title}</h2>
      <h3>{movie.time}</h3>
      <ul>
        {movie.genres.map((genre, i) => <li key={i}>{genre}</li>)}
      </ul>
      </div>)
    })}
    </div>;
}

export default Movies;
