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
  const isDataFetched = useSelector((state) => state.movies.isDataFetched);
  const favMovieList = useSelector((state) => state.movies.favMovieList);

  const fetchMoviesHandler = (value) => {
    dispatch(fetchMoviesData(value));
  };

  console.log(isDataFetched);
  const debouncedEventHandler = useMemo(
    () => debounce(fetchMoviesHandler, 300),
    []
  );

  const filterMoviesArray = (inputValue) => {
    const filteredArray = favMovieList.filter((movie) =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    dispatch(moviesActions.filterMovies(filteredArray));
  };

  return (
    <Fragment>
      {isDataFetched && (
        <section className={styles.FormWrapper}>
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
                  placeholder={"Search for movies.."}
                ></input>
              </div>
              <div>
                <button className={styles.FormSearchIconWrapper} type="submit">
                  <FaSearch className={styles.FormSearchIcon} />
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
      {!isDataFetched && (
        <section className={styles.FormWrapper}>
          <form
            className={styles.Form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={styles.FormSearchWrapper}>
              <div className={styles.FormInputWrapper}>
                <input
                  onChange={(e) => filterMoviesArray(e.target.value)}
                  type="text"
                  placeholder={"Filter movies..."}
                ></input>
              </div>
              <div className={styles.FormSearchEmptyWrapper}></div>
            </div>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default MovieSearchForm;
