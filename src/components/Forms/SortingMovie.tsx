import styles from './SortingMovie.module.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { moviesActions } from '../../store/movies-slice';
import { useEffect } from 'react';
import ToggleSwitch from '../Buttons/ColorChangingSwitch';

const SortingMovie = () => {
  const dispatch = useAppDispatch();
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);

  const sortInputValue = useAppSelector((state) => state.movies.sortInputValue);

  const colors = isdayModeActive ? styles.dayMode : styles.nightMode;

  return (
    <section className={styles.sorttypelistcontainer}>
      <label
        className={styles.label}
        style={{ color: isdayModeActive ? 'black' : 'white' }}
      >
        Sort By:
      </label>
      <div className={styles.sorttypeselectcontainer}>
        <select
          defaultValue={sortInputValue}
          className={`${styles.sortytypeselect} ${colors}`}
          name="filterbyCategory"
          onChange={(event) => {
            event.preventDefault();
            dispatch(moviesActions.sortInputValue(event.target.value));
          }}
        >
          <option value="Title (ascending)">Title (ascending)</option>
          <option value="Title (descending)">Title (descending)</option>
          <option value="Rating (ascending)">Rating (ascending)</option>
          <option value="Rating (descending)">Rating (descending)</option>
        </select>
      </div>
      <ToggleSwitch />
    </section>
  );
};

export default SortingMovie;
