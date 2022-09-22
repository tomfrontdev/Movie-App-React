import React from "react";
import styles from "../components/MovieSearchForm.module.css";
import { FaSearch } from "react-icons/fa";
import { Fragment, useMemo } from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { fetchMoviesData } from "../store/movies-actions";
import { useSelector } from "react-redux";
import { moviesActions } from "../store/movies-slice";

const MovieSearchForm = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.movies.searchInput);

  const fetchMoviesHandler = (value) => {
    dispatch(fetchMoviesData(value));
  };

  const debouncedEventHandler = useMemo(
    () => debounce(fetchMoviesHandler, 300),
    []
  );
  return (
    <Fragment>
      <form
        className={styles.Form}
        onSubmit={(e) => {
          debouncedEventHandler(searchInput);
          e.preventDefault();
        }}
      >
        <div className={styles.FormSearchWrapper}>
          <div className={styles.FormInputWrapper}>
            <input
              onChange={(e) => {
                debouncedEventHandler(e.target.value);
                dispatch(moviesActions.setsearchInput(e.target.value));
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
    </Fragment>
  );
};

export default MovieSearchForm;
