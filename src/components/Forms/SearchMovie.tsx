import React, { useRef, useEffect, useCallback } from 'react';
import styles from '../Forms/SearchMovie.module.css';
import { FaSearch } from 'react-icons/fa';
import { Fragment, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { fetchMoviesData } from '../../store/movies-actions';
import { moviesActions } from '../../store/movies-slice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const SearchMovie = () => {
  const dispatch = useAppDispatch();
  const searchInput = useAppSelector((state) => state.movies.searchInput);
  const isDataFetched = useAppSelector((state) => state.movies.isDataFetched);
  const favMovieList = useAppSelector((state) => state.movies.favMovieList);
  const filterInput = useAppSelector((state) => state.movies.filterInput);
  const searchInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);

  const focusInput = () => searchInputRef.current.focus();

  useEffect(() => focusInput());

  const fetchMoviesHandler = useCallback(
    (value: string) => {
      dispatch(fetchMoviesData(value));
    },
    [dispatch]
  );

  const debouncedEventHandler = useMemo(
    () => debounce(fetchMoviesHandler, 300),
    [fetchMoviesHandler]
  );

  const filterMoviesArray = (inputValue: string) => {
    const filteredArray = favMovieList.filter((movie) =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    dispatch(moviesActions.filterMovies(filteredArray));
  };

  const colors = isdayModeActive ? `${styles.dayMode}` : `${styles.nightMode}`;

  return (
    <Fragment>
      <section className={styles.FormWrapper}>
        <form
          className={styles.Form}
          onSubmit={
            isDataFetched
              ? (e) => {
                  debouncedEventHandler(searchInput);
                  e.preventDefault();
                  focusInput();
                }
              : (e) => e.preventDefault()
          }
        >
          <div className={styles.FormSearchWrapper}>
            <div className={styles.FormInputWrapper}>
              <input
                ref={searchInputRef}
                onChange={
                  isDataFetched
                    ? (e) => {
                        debouncedEventHandler(e.target.value);
                        dispatch(moviesActions.setsearchInput(e.target.value));
                      }
                    : (e) => {
                        filterMoviesArray(e.target.value);
                        dispatch(
                          moviesActions.setfilterInputValue(e.target.value)
                        );
                      }
                }
                type="text"
                placeholder={
                  isDataFetched ? 'Search for movies..' : 'Filter movies...'
                }
                value={isDataFetched ? searchInput : filterInput}
                className={`${styles.FormInput} ${colors}`}
              ></input>
            </div>
            {isDataFetched ? (
              <div>
                <button className={styles.FormSearchIconWrapper} type="submit">
                  <FaSearch className={styles.FormSearchIcon} />
                </button>
              </div>
            ) : (
              <div className={styles.FormSearchEmptyWrapper}></div>
            )}
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default SearchMovie;
