import React, { useEffect, useState, useCallback} from "react";
import MoviesList from "./component/ApiFetch/MoviesList";
import FetchMovie from "./component/ApiFetch/FetchMovie";
import "./App.css";

function AppApiFetch() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const ApiHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://first-dummy-ef331-default-rtdb.firebaseio.com/Movies.json");
        if (!response.ok) {
          throw new Error("Something went wrong ....Retrying");
        }
        const data = await response.json();

        const loadedMovies = [];

        for(const key in data){
            loadedMovies.push({
                id:key,
                title:data[key].title,
                openingText:data[key].openingText,
                releaseDate:data[key].releaseDate,
            });
        }

  
        
        setMovies(loadedMovies);
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

    async function  onAdd (movieitem) {
        const response = await fetch('https://first-dummy-ef331-default-rtdb.firebaseio.com/Movies.json',{
           method:'POST',
           body:JSON.stringify(movieitem),
           headers:{
             'Content-Type':'application/json'
           }
         })
         const data = await response.json()
         console.log(data)
       }

       async  function  onDelete (id){
        const response = await  fetch(`https://first-dummy-ef331-default-rtdb.firebaseio.com/Movies/${id}.json/`,{
         method: 'DELETE',
         
   
        })
        return response.json()
     }

    return (
      <React.Fragment>
        <section>
            <FetchMovie onAdd={onAdd} />
        </section>

        <section>
          <button onClick={ApiHandler}>Fetch Movies</button>
        </section>
        <section>
        {!isLoading && <MoviesList setMovies={setMovies} onDelete={onDelete} movies={movies} />}
  
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