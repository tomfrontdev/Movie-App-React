import styles from "../components/MovieList.module.css";
import MovieItem from "./MovieItem";
import React from "react";
import AddedMovieItemList from "../components/AddedMovieItemList";

const MovieList = ({
  handleFavoriteMovies,
  favoriteButton,
  movie,
  favoriteMovies,
  addedOwnMovies,
  addedOwnMoviesData,
}) => {
  return (
    <React.Fragment>
      <div className={styles.MovieList}>
        <ul>
          {movie &&
            !addedOwnMovies &&
            movie.map((movie) => (
              <MovieItem
                title={movie.title}
                year={movie.year}
                id={movie.id}
                favorite={movie.favorite}
                favoriteButton={favoriteButton}
                handleFavoriteMovies={handleFavoriteMovies}
              ></MovieItem>
            ))}
          {favoriteMovies &&
            favoriteMovies.map((movie) => (
              <MovieItem
                title={movie.title}
                year={movie.year}
                id={movie.id}
                favorite={movie.favorite}
                favoriteButton={favoriteButton}
                handleFavoriteMovies={handleFavoriteMovies}
              ></MovieItem>
            ))}
          {addedOwnMovies &&
            addedOwnMoviesData.map((ownMovies) => (
              <MovieItem
                title={ownMovies.title}
                addedOwnMovies={true}
              ></MovieItem>
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MovieList;
