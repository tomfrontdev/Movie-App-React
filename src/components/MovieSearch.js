import React, { useState } from "react";
import styles from "../components/MovieSearch.module.css";

const MovieSearch = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    fetch(`https://api.tvmaze.com/search/shows?q=${props.movieInput}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const serialData = data.map((data) => data.show);
        console.log(serialData);
        props.setMovieHandler(serialData);
      });
  };

  return (
    <section className={styles.FormWrapper}>
      <form className={styles.Form} onSubmit={handleChange}>
        <input
          onChange={(e) => props.setMovieInputHandler(e.target.value)}
          value={props.movieInput}
          type="text"
          placeholder={"Enter movie title..."}
        ></input>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default MovieSearch;
