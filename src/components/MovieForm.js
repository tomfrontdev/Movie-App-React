import React from "react";
import styles from "../components/MovieForm.module.css";
import Button from "../UI/Button";
import { FaSearch } from "react-icons/fa";

const MovieForm = ({
  fetchMoviesHandler,
  setsearchInput,
  searchInput,
  addNewMovie,
}) => {
  return (
    <React.Fragment>
      <div className={styles.FormWrapper}>
        <form className={styles.Form}>
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
              <div
                className={styles.FormSearchIconWrapper}
                onClick={() => fetchMoviesHandler(searchInput)}
              >
                <FaSearch className={styles.FormSearchIcon} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default MovieForm;
