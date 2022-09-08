import React, { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import styles from "./App.module.css";
import SpinnerModal from "./components/SpinnerModal";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import FavoriteMovies from "./components/FavoriteMovies";
import AddFilm from "./components/AddFilm";
import MainPage from "./pages/MainSite";

function App() {
  const [searchInput, setsearchInput] = useState("");
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleFavoriteMovies = (id) => {
    setMovie((prev) =>
      prev.map((movie) => {
        return {
          ...movie,
          ...(movie.id === id && {
            favorite: !movie.favorite,
          }),
        };
      })
    );
  };

  const addFavMoviesToFavListPage = () => {
    const clickedMovie = movie.filter((movie) => movie.favorite === true);
    setFavoriteMovies(clickedMovie);
  };

  const fetchMoviesHandler = async (value) => {
    console.log(value);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${value}`
      );
      const data = await response.json();

      const movieData = data.map((movie) => movie.show);
      const transformedMovies = movieData.map((movie) => {
        return {
          id: movie.id,
          year: movie.premiered,
          title: movie.name,
          favorite: false,
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
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(fetchMoviesHandler, 300),
    [searchInput]
  );

  useEffect(() => {
    fetchMoviesHandler("girls");
  }, []);

  useEffect(() => {
    addFavMoviesToFavListPage();
  }, [movie, searchInput]);

  return (
    <React.Fragment>
      {isLoading && <SpinnerModal />}
      <main className={styles.App}>
        <Header></Header>
        <Route path="/welcome">
          <MainPage
            fetchMoviesHandler={debouncedChangeHandler}
            setsearchInput={setsearchInput}
            searchInput={searchInput}
            isLoading={isLoading}
            movie={movie}
            moviesToDisplay={moviesToDisplay}
            error={error}
            handleFavoriteMovies={handleFavoriteMovies}
          ></MainPage>
        </Route>
        <Route path="/favoritefilms">
          <FavoriteMovies
            isLoading={isLoading}
            favoriteMovies={favoriteMovies}
            moviesToDisplay={moviesToDisplay}
            handleFavoriteMovies={handleFavoriteMovies}
          ></FavoriteMovies>
        </Route>
        <Route path="/addfilm">
          <AddFilm></AddFilm>
        </Route>
      </main>
    </React.Fragment>
  );
}

export default App;