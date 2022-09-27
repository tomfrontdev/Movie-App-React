import React from "react";
import styles from "../UI/Button.module.css";
import { MdFavoriteBorder, MdFavorite, MdDeleteOutline } from "react-icons/md";

const Button = ({
  addedMovies,
  isFav,
  id,
  handleFavoriteMovies,
  text,
  modalBtn,
}) => {
  return (
    <React.Fragment>
      {!addedMovies && (
        <button
          className={styles.Button}
          onClick={() => {
            handleFavoriteMovies(id);
          }}
        >
          {!isFav ? (
            <MdFavoriteBorder className={styles.Icon}></MdFavoriteBorder>
          ) : (
            <MdFavorite className={styles.Icon}></MdFavorite>
          )}
        </button>
      )}
      {addedMovies && (
        <button
          className={styles.Button}
          onClick={() => handleFavoriteMovies(id)}
        >
          <MdDeleteOutline className={styles.Icon}></MdDeleteOutline>
        </button>
      )}
      {modalBtn && (
        <button
          className={styles.Button}
          onClick={() => {
            handleFavoriteMovies(id);
          }}
        >
          {text}
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
