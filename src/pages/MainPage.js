import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import React from "react";
import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/Movies";
import { useSelector } from "react-redux";

import debounce from "lodash.debounce";

const MainPage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const favMovieList = useSelector((state) => state.favMovieList);
  const [searchInput, setsearchInput] = useState("");
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);
  const [error, setError] = useState(null);

  const handleFavoriteMovies = (id) => {
    const clickedMovie = movieList.find((movie) => movie.id === id);
    if (!favMovieList.includes((item) => item.id === id)) {
      dispatch(moviesActions.AddMovieToFav(clickedMovie));
    }

    // if (favMovieList.includes(clickedMovie))
    //   dispatch(moviesActions.RemoveMovieFromFav(clickedMovie));
  };

  console.log(favMovieList);

  // const addFavMoviesToFavListPage = () => {
  //   const clickedMovie = movie.filter((movie) => movie.favorite);
  //   setFavoriteMovies(clickedMovie);
  // };

  const fetchMoviesHandler = async (value) => {
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

  const debouncedChangeHandler = useMemo(
    () => debounce(fetchMoviesHandler, 300),
    []
  );

  useEffect(() => {
    fetchMoviesHandler("girls");
  }, []);

  // useEffect(() => {
  //   addFavMoviesToFavListPage();
  // }, [movie, searchInput, addFavMoviesToFavListPage]);

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
        handleFavoriteMovies={handleFavoriteMovies}
        favoriteButton={true}
        moviesToDisplay={moviesToDisplay}
        error={error}
      ></MovieList>
    </React.Fragment>
  );
};

export default MainPage;
