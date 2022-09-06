import React from "react";
import styles from "../components/MovieSearch.module.css";

const MovieSearch = (props) => {
  return (
    <section className={styles.FormWrapper}>
      <form className={styles.Form} onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => {
            props.fetchMoviesHandler(e.target.value);
            props.setsearchInput(e.target.value);
          }}
          value={props.searchInput}
          type="text"
          placeholder={"Enter movie title..."}
        ></input>
        <div className={styles.Refresh}>
          <button onClick={(e) => props.fetchMoviesHandler(props.searchInput)}>
            <p>Refresh</p>
          </button>
        </div>
      </form>
    </section>
  );
};

export default MovieSearch;
