import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import styles from "./App.module.css";
import MovieList from "./components/MovieList";
import SpinnerModal from "./components/SpinnerModal";
import { useEffect } from "react";

function App() {
  const [movieInput, setMovieInput] = useState("");
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToDisplay, setMoviesToDisplay] = useState(false);

  async function fetchMoviesHandler(content) {
    setMovieInput(content);
    setIsLoading(true);
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${content}`
    );
    const data = await response.json();
    const serialData = data.map((serial) => serial.show);
    setMovie(serialData);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    async function fetchStarterMovies() {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=girls`
      );
      const data = await response.json();
      const serialData = data.map((serial) => serial.show);
      setMovie(serialData);
      setIsLoading(false);
    }
    fetchStarterMovies();
  }, []);

  return (
    <React.Fragment>
      {isLoading && <SpinnerModal />}
      <main className={styles.App}>
        <MovieSearch
          fetchMoviesHandler={fetchMoviesHandler}
          movieInput={movieInput}
        ></MovieSearch>
        <MovieList
          isLoading={isLoading}
          movie={movie}
          movieInput={movieInput}
        ></MovieList>
      </main>
    </React.Fragment>
  );
}

export default App;
