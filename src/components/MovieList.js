import styles from "../components/MovieList.module.css";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

const MovieList = (props) => {
  console.log(props.movie);
  return (
    <section className={styles.Moviecontainer}>
      <ul className={styles.Movielist}>
        {props.moviesToDisplay &&
          props.movie.map((movie) => (
            <li className={styles.Movie} onClick={() => console.log(movie.id)}>
              <p className={styles.Movietitle}>Movie title:</p>
              <p>{movie.title}</p>
              <p className={styles.Movieyear}>Date of Premiere:</p>
              <p>{movie.year}</p>
            </li>
          ))}
        {!props.moviesToDisplay && !props.error && (
          <li className={styles.Movie}>
            <p>No movies found!</p>
          </li>
        )}
        {props.error && (
          <li className={styles.Movie}>
            <p>{props.error}</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default MovieList;
