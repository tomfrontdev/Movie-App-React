import { useRef, useCallback } from 'react';
import styles from '../Forms/SearchMovie.module.css';
import { FaSearch } from 'react-icons/fa';
import { Fragment, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { fetchMoviesData } from '../../store/movies-actions';
import { moviesActions } from '../../store/movies-slice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const SearchMovie = () => {
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);
  const searchInput = useAppSelector((state) => state.movies.searchInput);

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

  const colors = isdayModeActive ? `${styles.dayMode}` : `${styles.nightMode}`;

  return (
    <Fragment>
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
                ref={searchInputRef}
                onChange={(e) => {
                  dispatch(moviesActions.setsearchInput(e.target.value));
                  debouncedEventHandler(e.target.value);
                }}
                type="text"
                placeholder={'Search for moviesss..'}
                value={searchInput ? searchInput : ''}
                className={`${styles.FormInput} ${colors}`}
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
    </Fragment>
  );
};

export default SearchMovie;
