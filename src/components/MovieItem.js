import React from "react";
import styles from "../components/MovieItem.module.css";
import Button from "../UI/Button";

const MovieItem = ({
  favorite,
  handleFavoriteMovies,
  title,
  year,
  id,
  movie,
}) => {
  return (
    <li>
      <div className={styles.Moviecontainer}>
        <div className={styles.Moviedatacontainer}>
          <div className={styles.Moviedata}>
            <p className={styles.Movietitle}>Item title:</p>
            <p>{title}</p>
            <p className={styles.Movieyear}>Date of Premiere</p>
            <p>{year}</p>
          </div>
        </div>
        <div className={styles.MovieItemButtonWrapper}>
          <Button
            text={"Add To Favorite"}
            favorite={favorite}
            movie={movie}
            id={id}
            handleFavoriteMovies={handleFavoriteMovies}
          ></Button>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;
