import React from "react";
import styles from "../components/MovieForm.module.css";
import Button from "../UI/Button";

const MovieForm = ({
  fetchMoviesHandler,
  setsearchInput,
  searchInput,
  addNewMovie,
}) => {
  return (
    <React.Fragment>
      <div className={styles.FormWrapper}>
        <form className={styles.Form} onSubmit={(e) => e.preventDefault()}>
          {fetchMoviesHandler && (
            <div>
              <input
                onChange={(e) => {
                  fetchMoviesHandler(e.target.value);
                  setsearchInput(e.target.value);
                }}
                value={searchInput}
                type="text"
                placeholder={"Enter movie title..."}
              ></input>
            </div>
          )}
          {!fetchMoviesHandler && (
            <div>
              <input
                onChange={(e) => {
                  setsearchInput(e.target.value);
                }}
                value={searchInput}
                type="text"
                placeholder={"Add New Movie..."}
              ></input>
            </div>
          )}
          {fetchMoviesHandler && (
            <div className={styles.MovieFormButtonWrapper}>
              <Button
                text={"Refresh"}
                searchInput={searchInput}
                onClick={() => console.log("Hi")}
                fetchMoviesHandler={fetchMoviesHandler}
              ></Button>
            </div>
          )}
          {!fetchMoviesHandler && (
            <div className={styles.MovieFormButtonWrapper}>
              <Button
                text={"Add New Movie"}
                searchInput={searchInput}
                addNewMovie={addNewMovie}
              ></Button>
            </div>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default MovieForm;
