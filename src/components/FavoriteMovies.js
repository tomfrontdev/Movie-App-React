import styles from "../components/MovieList.module.css";

const FavoriteMovies = (props) => {
  return (
    <section className={styles.Itemcontainer}>
      <ul className={styles.Itemlist}>
        {props.favoriteMovies.map((movie) => (
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
        {props.favoriteMovies.length === 0 && (
          <li className={styles.Item}>
            <p>No favorite movies</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default FavoriteMovies;
