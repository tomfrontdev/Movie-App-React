import React from "react";
import styles from "../components/MovieSearchForm.module.css";
import { FaSearch } from "react-icons/fa";

const MovieSearchForm = ({
  fetchMoviesHandler,
  setsearchInput,
  searchInput,
}) => {
  return (
    <React.Fragment>
      <form
        className={styles.Form}
        onSubmit={(e) => {
          fetchMoviesHandler(searchInput);
          e.preventDefault();
        }}
      >
        <div className={styles.FormSearchWrapper}>
          <div className={styles.FormInputWrapper}>
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
          <div>
            <button className={styles.FormSearchIconWrapper} type="submit">
              <FaSearch className={styles.FormSearchIcon} />
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default MovieSearchForm;
