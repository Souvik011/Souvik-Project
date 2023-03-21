import React, { useState } from "react";

const FetchMovie = (props) => {
  const [enteredtitle, setenteredTitle] = useState("");
  const [enteredopeningText, setenteredOpeningText] = useState("");
  const [enteredreleaseDate, setenteredReleaseDate] = useState("");

  const titleHandler = (event) => {

    setenteredTitle(event.target.value);
  };
  const openingtextHandler = (event) => {

    setenteredOpeningText(event.target.value);
  };
  const releasedateHandler = (event) => {

    setenteredReleaseDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const NewMovieObj = {
        title: enteredtitle,
        openingText: enteredopeningText,
        releaseDate: enteredreleaseDate,
      };
      console.log(NewMovieObj,"formFetchMovieform");
  
        props.onAdd(NewMovieObj)
      setenteredTitle('');
      setenteredOpeningText('');
      setenteredReleaseDate('')
  
    };

  return (
    <div>
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <div>
          {" "}
          <input
            value={enteredtitle}
            onChange={titleHandler}
            type="text"
          ></input>
        </div>
      </div>
      <div>
        {" "}
        <label htmlFor="Opening Text">Opening Text</label>
        <div>
          {" "}
          <textarea
            value={enteredopeningText}
            onChange={openingtextHandler}
            rows="4"
            cols="50"
          ></textarea>
        </div>
      </div>
      <div>
        {" "}
        <label htmlFor="Release Date">Release Date</label>
        <div>
          {" "}
          <input
            value={enteredreleaseDate}
            onChange={releasedateHandler}
            type="text"
          ></input>
        </div>
      </div>
      <div>
        {" "}
        <button>Add Movie</button>
      </div>
    </form>
    <p>{enteredtitle}</p>
    <p>{enteredopeningText}</p>
    <p>{enteredreleaseDate}</p>


    </div>
  );
}

export default FetchMovie;