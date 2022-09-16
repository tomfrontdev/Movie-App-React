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
  const favMovieList = useSelector((state) => state.favMovieList);
  const [searchInput, setsearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);
  const [error, setError] = useState(null);

  console.log(movieList);

  const fetchMoviesHandler = async (value) => {
    setIsLoading(true);
    setError(null);
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
      if (transformedMovies.length === 0) {
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

  const debouncedChangeHandler = useMemo(() =>
    debounce(fetchMoviesHandler, 300)
  );

  useEffect(() => {
    fetchMoviesHandler("girls");
  }, []);

  return (
    <React.Fragment>
      <MovieForm
        fetchMoviesHandler={debouncedChangeHandler}
        setsearchInput={setsearchInput}
        searchInput={searchInput}
      ></MovieForm>
      <MovieList
        isLoading={isLoading}
        movie={movieList}
        searchInput={searchInput}
        favoriteButton={true}
        moviesToDisplay={moviesToDisplay}
        error={error}
      ></MovieList>
    </React.Fragment>
  );
};

export default MainPage;
