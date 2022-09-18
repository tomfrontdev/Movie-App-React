import React from "react";
import styles from "../components/MovieItem.module.css";

const MovieItem = ({
  title,
  year,
  moviesToDisplay,
  addedMovies,
  description,
}) => {
  return (
    <React.Fragment>
      {moviesToDisplay && (
        <div className={styles.Moviedatacontainer}>
          <div className={styles.Moviedata}>
            <p className={styles.Movietitle}>Movie title:</p>
            <p>{title}</p>
            <p className={styles.Movieyear}>Date of Premiere</p>
            <p>{year}</p>
          </div>
        </div>
      )}
      {addedMovies && (
        <div className={styles.Moviedatacontainer}>
          <div className={styles.Moviedata}>
            <p className={styles.Movietitle}>Movie title:</p>
            <p>{title}</p>
            <p className={styles.Movieyear}>Movie description</p>
            <p>{description}</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MovieItem;
