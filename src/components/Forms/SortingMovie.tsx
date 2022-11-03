import styles from './SortingMovie.module.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { moviesActions } from '../../store/movies-slice';
import { useEffect } from 'react';
import ToggleSwitch from '../Buttons/ColorChangingSwitch';

type AppProps = {
  movieListname: string;
};

const SortingMovie = ({ movieListname }: AppProps) => {
  const dispatch = useAppDispatch();
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);

  const sortInputValue = useAppSelector(
    (state) => state.movies.sortFormInputValue
  );

  const setInputValue = (value: any) => {
    dispatch(moviesActions.setInputValue(value));
  };

  useEffect(() => {
    const sortParams = sortInputValue.split(' ');
    const title = sortParams[0];
    const titletoLowerCase = title.toLowerCase();
    const order = sortParams[1];

    dispatch(
      moviesActions.sort({
        movieListname,
        sortBy: titletoLowerCase,
        sortDirection: order,
      })
    );
  }, [dispatch, movieListname, sortInputValue]);

  const colors = isdayModeActive ? `${styles.dayMode}` : `${styles.nightMode}`;

  return (
    <div className={styles.sorttypelistcontainer}>
      <label
        className={styles.label}
        style={{ color: isdayModeActive ? 'black' : 'white' }}
      >
        Sort By:
      </label>
      <form className={styles.sorttypelistform}>
        <select
          defaultValue={sortInputValue}
          className={`${styles.sortytypeselect} ${colors}`}
          name="filterByCateogry"
        >
          <option
            value="Title (ascending)"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;

              setInputValue(target.value);
            }}
          >
            Title (ascending)
          </option>
          <option
            value="Title (descending)"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              setInputValue(target.value);
            }}
          >
            Title (descending)
          </option>
          <option
            value="Rating (ascending)"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              setInputValue(target.value);
            }}
          >
            Rating (ascending)
          </option>
          <option
            value="Rating (descending)"
            onClick={(event) => {
              const target = event.target as HTMLInputElement;
              setInputValue(target.value);
            }}
          >
            Rating (descending)
          </option>
        </select>
      </form>
      <ToggleSwitch />
    </div>
  );
};

export default SortingMovie;
