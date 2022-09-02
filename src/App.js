import logo from "./logo.svg";
import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import styles from "./App.module.css";
import MovieList from "./components/MovieList";
import { Fragment } from "react";
// import { DebounceInput } from "react-debounce-input";

function App() {
  const [movieInput, setMovieInput] = useState("");
  const [movie, setMovie] = useState("");
  const [movieList, setMovieList] = useState(false);

  const setMovieHandler = (data) => {
    if (data !== "") setMovieList(true);
    setMovie(data);
  };

  const setMovieInputHandler = (data) => {
    setMovieInput(data);
  };

  return (
    <React.Fragment>
      <main className={styles.App}>
        <MovieSearch
          setMovieHandler={setMovieHandler}
          setMovieInputHandler={setMovieInputHandler}
          movieInput={movieInput}
        ></MovieSearch>
        {movieList && <MovieList movie={movie}></MovieList>}
      </main>
    </React.Fragment>
  );
}

export default App;
