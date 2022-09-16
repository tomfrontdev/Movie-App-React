import React from "react";
import styles from "../components/MovieFetchError.module.css";

const MovieFetchError = ({ text }) => {
  return (
    <React.Fragment>
      <div className={styles.ErrorTextWrapper}>
        <p className={styles.ErrorText}>{text}</p>
      </div>
    </React.Fragment>
  );
};

export default MovieFetchError;
