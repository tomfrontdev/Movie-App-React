import styles from "../components/MovieAddFilmForm.module.css";
import React from "react";

const MovieAddFilmForm = () => {
  return (
    <React.Fragment>
      <div className={styles.FormAddFilmWrapper}>
        <div className={styles.FormInputWrapper}>
          <input type="text" placeholder={"Enter movie title..."}></input>
        </div>
        <div className={styles.FormInputWrapper}>
          <input type="text" placeholder={"Enter movie description..."}></input>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieAddFilmForm;
