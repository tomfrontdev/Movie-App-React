import React from "react";
import styles from "../UI/Button.module.css";
import { NavLink } from "react-router-dom";

const Button = ({ isFav, text, id, handleFavoriteMovies, redirect }) => {
  return (
    <React.Fragment>
      <button
        className={!isFav ? styles.Greenborder : styles.Redborder}
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
