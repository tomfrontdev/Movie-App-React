import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import React from "react";
import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../store/Movies";
import debounce from "lodash.debounce";

const MainPage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const [searchInput, setsearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);
  const [httpError, sethttpError] = useState(null);

  const fetchMoviesHandler = async (value) => {
    setIsLoading(true);
    sethttpError(null);
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${value}`
      );
      const data = await response.json();

      const movieData = data.map((movie) => movie.show);
      console.log(movieData);
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

  console.log(searchInput);
  const debouncedChangeHandler = useMemo(() =>
    debounce(fetchMoviesHandler, 300)
  );

  useEffect(() => {
    fetchMoviesHandler("girls");
  }, []);

  useEffect(() => {
    if (movieList.length === 0) {
      setMoviesToDisplay(false);
    }
    if (movieList.length > 0) {
      setMoviesToDisplay(true);
    }
  }, [movieList]);
  return (
    <React.Fragment>
      <MovieForm
        fetchMoviesHandler={fetchMoviesHandler}
        setsearchInput={setsearchInput}
        searchInput={searchInput}
      ></MovieForm>
      <MovieList
        moviesToDisplay={moviesToDisplay}
        isLoading={isLoading}
        movie={movieList}
        searchInput={searchInput}
        httpError={httpError}
      ></MovieList>
    </React.Fragment>
  );
};

export default MainPage;
