import MovieSearchForm from "../components/MovieSearchForm";
import MovieList from "../components/MovieList";
import React from "react";
import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../store/movies-slice.js";
import debounce from "lodash.debounce";
import SpinnerModal from "../components/SpinnerModal";
import MovieFetchError from "../components/MovieFetchError.js";
import MovieFormWrapper from "../components/MovieFormWrapper";
import { fetchMoviesData } from "../store/movies-actions";

const MainPage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movies.movieList);
  const fetchingError = useSelector((state) => state.ui.error);
  const isdataLoading = useSelector((state) => state.ui.isdataLoading);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);
  const [searchInput, setsearchInput] = useState("");

  const fetchMoviesHandler = (value) => {
    dispatch(fetchMoviesData(value));
  };

  const debouncedEventHandler = useMemo(
    () => debounce(fetchMoviesHandler, 300),
    []
  );

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
      <MovieFormWrapper>
        <MovieSearchForm
          setsearchInput={setsearchInput}
          fetchMoviesHandler={debouncedEventHandler}
          searchInput={searchInput}
        ></MovieSearchForm>
      </MovieFormWrapper>
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
