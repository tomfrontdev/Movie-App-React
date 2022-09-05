import React, { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import styles from "./App.module.css";
import MovieList from "./components/MovieList";
import SpinnerModal from "./components/SpinnerModal";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const [movieInput, setMovieInput] = useState("");
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);
  const [error, setError] = useState(null);

  const setInput = (content) => {
    setMovieInput(content);
  };

  async function fetchMoviesHandler(content) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.tvvmaze.com/search/shows?q=${content}`
      );
      const data = await response.json();

      const movieData = data.map((movie) => movie.show);
      const transformedMovies = movieData.map((movie) => {
        return {
          id: movie.id,
          year: movie.premiered,
          title: movie.name,
        };
      });
      setMovie(transformedMovies);
      setIsLoading(false);
      if (transformedMovies.length == 0) {
        setMoviesToDisplay(false);
      }
      if (transformedMovies.length > 0) {
        setMoviesToDisplay(true);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchMoviesHandler("girls");
  }, []);

  return (
    <React.Fragment>
      {isLoading && <SpinnerModal />}
      <main className={styles.App}>
        <Header></Header>
        <MovieSearch
          fetchMoviesHandler={fetchMoviesHandler}
          setInput={setInput}
          movieInput={movieInput}
        ></MovieSearch>
        <MovieList
          isLoading={isLoading}
          movie={movie}
          movieInput={movieInput}
          moviesToDisplay={moviesToDisplay}
          error={error}
        ></MovieList>
      </main>
    </React.Fragment>
  );
}

export default App;
