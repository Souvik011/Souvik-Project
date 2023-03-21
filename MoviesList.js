import React from "react";

import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MoviesList = (props) => {
  return (
    <div>
      <ul className={classes["movies-list"]}>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            item={movie}
            onDelete={props.onDelete}
            setMovies={props.setMovies}
            movies ={props.movies}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;