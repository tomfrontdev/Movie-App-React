import MovieList from "../components/MovieList";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerModal from "../components/SpinnerModal";
import MovieFetchError from "../components/MovieFetchError.js";
import { fetchMoviesData } from "../store/movies-actions";

const MainPage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movies.movieList);
  const fetchingError = useSelector((state) => state.ui.error);
  const isdataLoading = useSelector((state) => state.ui.isdataLoading);
  const searchInput = useSelector((state) => state.movies.searchInput);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);

  useEffect(() => {
    dispatch(fetchMoviesData("girls"));
  }, [dispatch]);

  useEffect(() => {
    if (moviesList.length === 0 && searchInput !== "") {
      setMoviesToDisplay(false);
    }
    if (moviesList.length > 0) {
      setMoviesToDisplay(true);
    }
  }, [moviesList]);
  return (
    <React.Fragment>
      <MovieList
        moviesToDisplay={moviesToDisplay}
        movie={moviesList}
      ></MovieList>
      {isdataLoading && <SpinnerModal></SpinnerModal>}
      {!moviesToDisplay && !fetchingError && (
        <MovieFetchError text={"No Movies Found! :("}></MovieFetchError>
      )}
      {fetchingError && (
        <MovieFetchError text={fetchingError}></MovieFetchError>
      )}
    </React.Fragment>
  );
};

export default MainPage;
