import React from "react";
import styles from "../components/MovieItem.module.css";

const MovieItem = ({ title, year }) => {
  return (
    <React.Fragment>
      <div className={styles.Moviedatacontainer}>
        <div className={styles.Moviedata}>
          <p className={styles.Movietitle}>Item title:</p>
          <p>{title}</p>
          <p className={styles.Movieyear}>Date of Premiere</p>
          <p>{year}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieItem;
