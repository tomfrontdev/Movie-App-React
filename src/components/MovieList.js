import styles from "../components/MovieList.module.css";
import MovieItem from "./MovieItem";
import React from "react";
import AddedMovieItemList from "../components/AddedMovieItemList";

const MovieList = ({ handleFavoriteMovies, favoriteButton, movie }) => {
  return (
    <React.Fragment>
      <div className={styles.MovieList}>
        <ul>
          {movie.map((movie) => (
            <MovieItem
              title={movie.title}
              year={movie.year}
              id={movie.id}
              favorite={movie.favorite}
              favoriteButton={favoriteButton}
              handleFavoriteMovies={handleFavoriteMovies}
            ></MovieItem>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MovieList;
