import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  async function deleteHandler(id){
    await props.onDelete(id)
    props.setMovies(props.movies.filter((item)=> item.id !== id))
  }
 
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={()=>deleteHandler(props.item.id)} >Delete Movies</button>
    </li>
  );
};

export default Movie;
