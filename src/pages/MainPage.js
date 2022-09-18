import MovieSearchForm from "../components/MovieSearchForm";
import MovieList from "../components/MovieList";
import React from "react";
import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../store/Movies";
import debounce from "lodash.debounce";
import SpinnerModal from "../components/SpinnerModal";
import MovieFetchError from "../components/MovieFetchError.js";
import MovieFormWrapper from "../components/MovieFormWrapper";

const MainPage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);
  const [searchInput, setsearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, sethttpError] = useState(null);

  console.log(movieList);

  const fetchMoviesHandler = async (value) => {
    setIsLoading(true);
    sethttpError(null);
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
          img: movie.image.medium,
        };
      });
      dispatch(moviesActions.AddMovies(transformedMovies));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      sethttpError(error.message);
    }
  };

  const debouncedChangeHandler = useMemo(() =>
    debounce(fetchMoviesHandler, 300)
  );

  useEffect(() => {
    fetchMoviesHandler("girls");
  }, []);

  useEffect(() => {
    if (movieList.length === 0 && searchInput !== "") {
      setMoviesToDisplay(false);
    }
    if (movieList.length > 0) {
      setMoviesToDisplay(true);
    }
  }, [movieList]);
  return (
    <React.Fragment>
      <MovieFormWrapper>
        <MovieSearchForm
          setsearchInput={setsearchInput}
          fetchMoviesHandler={debouncedChangeHandler}
          searchInput={searchInput}
        ></MovieSearchForm>
      </MovieFormWrapper>
      <MovieList
        moviesToDisplay={moviesToDisplay}
        movie={movieList}
      ></MovieList>
      {isLoading && <SpinnerModal></SpinnerModal>}
      {!moviesToDisplay && (
        <MovieFetchError text={"No Movies Found! :("}></MovieFetchError>
      )}
      {httpError && !moviesToDisplay && (
        <MovieFetchError text={httpError}></MovieFetchError>
      )}
    </React.Fragment>
  );
};

export default MainPage;
