import React from "react";
import styles from "../UI/Button.module.css";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/index.js";
const Button = ({
  text,
  favorite,
  id,
  handleFavoriteMovies,
  searchInput,
  addNewMovie,
  fetchMoviesHandler,
}) => {
  const dispatch = useDispatch();

  const addNewMovieToList = () => {
    dispatch(counterActions.addData({ title: searchInput }));
  };
  return (
    <React.Fragment>
      {handleFavoriteMovies && (
        <button
          className={`${styles.Button} ${
            favorite && styles.Removefromfavorite
          }`}
          onClick={() => handleFavoriteMovies(id)}
        >
          {!favorite && <p>{text}</p>}
          {favorite && <p>{"Remove From Favorite"}</p>}
        </button>
      )}
      {!handleFavoriteMovies && !addNewMovie && (
        <button
          className={styles.Button}
          onClick={() => fetchMoviesHandler(searchInput)}
        >
          {<p>{text}</p>}
        </button>
      )}
      {!handleFavoriteMovies && addNewMovie && (
        <button className={styles.Button} onClick={addNewMovieToList}>
          {<p>{text}</p>}
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
