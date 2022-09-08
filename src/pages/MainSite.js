import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";
import React from "react";

const MainSite = (props) => {
  <React.Fragment>
    <MovieSearch
      fetchMoviesHandler={props.debouncedChangeHandler}
      setsearchInput={props.setsearchInput}
      searchInput={props.searchInput}
    ></MovieSearch>
    <MovieList
      isLoading={props.isLoading}
      movie={props.movie}
      searchInput={props.searchInput}
      moviesToDisplay={props.moviesToDisplay}
      error={props.error}
      handleFavoriteMovies={props.handleFavoriteMovies}
    ></MovieList>
  </React.Fragment>;
};

export default MainSite;
