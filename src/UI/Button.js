import React from "react";
import styles from "../UI/Button.module.css";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const Button = ({ isFav, text, id, handleFavoriteMovies }) => {
  return (
    <React.Fragment>
      <button
        className={styles.Button}
        onClick={() => {
          handleFavoriteMovies(id);
        }}
      >
        {!isFav ? (
          <MdFavoriteBorder className={styles.heartIcon}></MdFavoriteBorder>
        ) : (
          <MdFavorite className={styles.heartIcon}></MdFavorite>
        )}
      </button>
    </React.Fragment>
  );
};

export default Button;
