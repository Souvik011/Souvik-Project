import React, { useEffect, useState, useCallback} from "react";
import MoviesList from "./component/ApiFetch/MoviesList";
import "./App.css";

function AppApiFetch() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const ApiHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        if (!response.ok) {
          throw new Error("Something went wrong ....Retrying");
        }
        const data = await response.json();
  
        const transformdata = data.results.map((movieList) => {
          return {
            id: movieList.episode_id,
            title: movieList.title,
            releaseDate: movieList.release_date,
            openingText: movieList.opening_crawl,
          };
        });
        setMovies(transformdata);
      } catch (error) {
        setError(error.message);
      }
  
      setIsLoading(false);
    }, []);
    useEffect(() => {
      ApiHandler();
    }, [ApiHandler]);
  
    const retryingremovHandler = (event) => {
      setError(event.target.parentNode.remove());
    };
    return (
      <React.Fragment>
        <section>
          <button onClick={ApiHandler}>Fetch Movies</button>
        </section>
        <section>
          {!isLoading && <MoviesList movies={movies} />}
  
          {!isLoading && error && <p>{error} </p>}
  
          {isLoading && <p>Loading...</p>}
        </section>
  
        <div>
          {" "}
          {error && <button onClick={retryingremovHandler}>Cancel</button>}
        </div>
      </React.Fragment>
    );
  }
  export default AppApiFetch;