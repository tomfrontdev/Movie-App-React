import styles from "../components/MovieFormWrapper.module.css";
import React from "react";

const MovieFormWrapper = ({ children, searchInput, fetchMoviesHandler }) => {
  return (
    <React.Fragment>
      <div className={styles.FormWrapper}>
        <form
          className={styles.Form}
          onSubmit={(e) => {
            fetchMoviesHandler(searchInput);
            e.preventDefault();
          }}
        >
          {children}
        </form>
      </div>
    </React.Fragment>
  );
};

export default MovieFormWrapper;
