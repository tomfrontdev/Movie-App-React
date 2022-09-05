import React from "react";
import styles from "../components/MovieSearch.module.css";

const MovieSearch = (props) => {
  return (
    <section className={styles.FormWrapper}>
      <form className={styles.Form} onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => {
            props.fetchMoviesHandler(e.target.value);
            props.setInput(e.target.value);
          }}
          value={props.movieInput}
          type="text"
          placeholder={"Enter movie title..."}
        ></input>
      </form>
    </section>
  );
};

export default MovieSearch;
