import styles from "../components/MovieList.module.css";

const MovieList = (props) => {
  return (
    <section className={styles.Moviecontainer}>
      <ul className={styles.Movielist}>
        {props.movie.map((movie) => (
          <li className={styles.Movie}>
            <p>{movie.name}</p>
            <p>{movie.premiered}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
