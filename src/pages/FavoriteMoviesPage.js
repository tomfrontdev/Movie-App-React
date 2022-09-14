import React from "react";
import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const FavoriteMoviesPage = () => {
  const movieData = useSelector((state) => state.favMovieList);
  console.log(movieData);
  return (
    <React.Fragment>
      <MovieList
        movie={movieData}
        // isLoading={isLoading}
        // favoriteMovies={favoriteMovies}
        // moviesToDisplay={moviesToDisplay}
        // handleFavoriteMovies={handleFavoriteMovies}
        // favoriteButton={true}
      ></MovieList>
    </React.Fragment>
  );
};

export default FavoriteMoviesPage;
