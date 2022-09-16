import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const FavoriteMoviesPage = ({ handleFavoriteMovies }) => {
  const movieList = useSelector((state) => state.favMovieList);
  console.log(movieList);
  return (
    <React.Fragment>
      <MovieList movie={movieList}></MovieList>
    </React.Fragment>
  );
};

export default FavoriteMoviesPage;
