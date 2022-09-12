import React from "react";
import styles from "../components/MovieItem.module.css";
import Button from "../UI/Button";
import AddToFavMovieButton from "../UI/AddToFavMovieButton";

const MovieItem = ({
  favorite,
  handleFavoriteMovies,
  title,
  year,
  id,
  addedOwnMovies,
}) => {
  return (
    <li>
      <div className={styles.Moviecontainer}>
        <div className={styles.Moviedatacontainer}>
          <div className={styles.Moviedata}>
            <p className={styles.Movietitle}>Item title:</p>
            <p>{title}</p>
            {!addedOwnMovies && (
              <p className={styles.Movieyear}>Date of Premiere</p>
            )}
            {!addedOwnMovies && <p>{year}</p>}
          </div>
        </div>
        {!addedOwnMovies && (
          <div className={styles.MovieItemButtonWrapper}>
            <Button
              text={"Add To Favorite"}
              favorite={favorite}
              id={id}
              handleFavoriteMovies={handleFavoriteMovies}
            ></Button>
          </div>
        )}
        {/* {addedOwnMovies && (
          <div className={styles.MovieItemButtonWrapper}>
            <Button
              text={"Delete Movie"}
              favorite={favorite}
              id={id}
              handleFavoriteMovies={handleFavoriteMovies}
            ></Button>
          </div>
        )}
        {addedOwnMovies && (
          <div className={styles.MovieItemButtonWrapper}>
            <Button
              text={"Edit Movie"}
              favorite={favorite}
              id={id}
              handleFavoriteMovies={handleFavoriteMovies}
            ></Button>
          </div>
        )} */}
      </div>
    </li>
  );
};

export default MovieItem;
