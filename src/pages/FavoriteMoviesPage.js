import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const FavoriteMoviesPage = () => {
  const favMovieList = useSelector((state) => state.movies.favMovieList);

  return (
    <React.Fragment>
      <MovieList movie={favMovieList} moviesToDisplay={true}></MovieList>
    </React.Fragment>
  );
};

export default FavoriteMoviesPage;
