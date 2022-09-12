import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import React from "react";

const MainPage = ({
  fetchMoviesHandler,
  setsearchInput,
  searchInput,
  isLoading,
  movie,
  moviesToDisplay,
  error,
  handleFavoriteMovies,
}) => {
  return (
    <React.Fragment>
      <MovieForm
        fetchMoviesHandler={fetchMoviesHandler}
        setsearchInput={setsearchInput}
        searchInput={searchInput}
      ></MovieForm>
      {movie.length > 0 && (
        <MovieList
          isLoading={isLoading}
          movie={movie}
          searchInput={searchInput}
          handleFavoriteMovies={handleFavoriteMovies}
          favoriteButton={true}
          moviesToDisplay={moviesToDisplay}
          error={error}
        ></MovieList>
      )}
    </React.Fragment>
  );
};

export default MainPage;
