import React from "react";
import styles from "../UI/Button.module.css";
const Button = ({ isFav, text, id, handleFavoriteMovies }) => {
  return (
    <React.Fragment>
      <button
        className={!isFav ? styles.Addtofavorite : styles.Removefromfavorite}
        onClick={() => {
          handleFavoriteMovies(id);
        }}
      >
        <p>{text}</p>
      </button>
    </React.Fragment>
  );
};

export default Button;
