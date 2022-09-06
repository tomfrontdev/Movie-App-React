import styles from "../components/MovieList.module.css";

const MovieList = (props) => {
  return (
    <section className={styles.Itemcontainer}>
      <ul className={styles.Itemlist}>
        {props.moviesToDisplay &&
          props.movie.map((movie) => (
            <li className={styles.Item}>
              <p className={styles.Itemtitle}>Item title:</p>
              <p>{movie.title}</p>
              <p className={styles.Itemyear}>Date of Premiere:</p>
              <p>{movie.year}</p>
              <button
                className={
                  !movie.favorite
                    ? styles.Itembtnfavorite
                    : styles.Itembtnnonfavorite
                }
                onClick={() => props.handleFavoriteMovies(movie.id)}
              >
                {!movie.favorite ? "Add To Favorite" : "Remove From Favorite"}
              </button>
            </li>
          ))}
        {!props.moviesToDisplay && !props.error && (
          <li className={styles.Item}>
            <p>No Items found!</p>
          </li>
        )}
        {props.error && (
          <li className={styles.Item}>
            <p>{props.error}</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default MovieList;
