import React from "react";
import MovieList from "../components/MovieList";

const FavoriteMoviesPage = ({
  isLoading,
  favoriteMovies,
  moviesToDisplay,
  handleFavoriteMovies,
}) => {
  return (
    <React.Fragment>
      {favoriteMovies.length > 0 && (
        <MovieList
          isLoading={isLoading}
          favoriteMovies={favoriteMovies}
          moviesToDisplay={moviesToDisplay}
          handleFavoriteMovies={handleFavoriteMovies}
          favoriteButton={true}
        ></MovieList>
      )}
    </React.Fragment>
  );
};

export default FavoriteMoviesPage;
