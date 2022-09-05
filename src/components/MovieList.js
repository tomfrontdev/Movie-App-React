import styles from "../components/MovieList.module.css";
import { useState, useEffect } from "react";

const MovieList = (props) => {
  console.log(props.isLoading);
  const [moviesToDisplay, setMoviesToDisplay] = useState(false);

  useEffect(() => {
    if (props.movie.length > 0) {
      setMoviesToDisplay(true);
    }

    if (props.movie.length === 0) {
      setMoviesToDisplay(false);
    }
  });

  return (
    <section className={styles.Moviecontainer}>
      <ul className={styles.Movielist}>
        {moviesToDisplay &&
          props.movie.map((movie) => (
            <li className={styles.Movie}>
              <p className={styles.Movietitle}>Movie title:</p>
              <p>{movie.name}</p>
              <p className={styles.Movieyear}>Date of Premiere:</p>
              <p>{movie.premiered}</p>
            </li>
          ))}
        {!moviesToDisplay && (
          <li className={styles.Movie}>
            <p>No movies found!</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default MovieList;
