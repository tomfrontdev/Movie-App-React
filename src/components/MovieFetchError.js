import React from "react";
import styles from "../components/MovieFetchError.module.css";
import { useSelector } from "react-redux";

const MovieFetchError = ({ text }) => {
  const isdayModeActive = useSelector((state) => state.movies.dayMode);

  return (
    <React.Fragment>
      <div className={styles.ErrorTextWrapper}>
        <p
          className={styles.ErrorText}
          style={{ color: isdayModeActive ? "black" : "white" }}
        >
          {text}
        </p>
      </div>
    </React.Fragment>
  );
};

export default MovieFetchError;
