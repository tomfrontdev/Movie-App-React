import styles from "../components/SortTypeList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { useEffect } from "react";

const SortTypeList = ({ movieListname }) => {
  console.log(movieListname);
  const dispatch = useDispatch();
  const sortInputValue = useSelector(
    (state) => state.movies.sortFormInputValue
  );

  const setInputValue = (value) => {
    dispatch(moviesActions.setInputValue(value));
  };

  useEffect(() => {
    const sortParams = sortInputValue.split(" ");
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
  }, [sortInputValue]);
  return (
    <div className={styles.sorttypelistcontainer}>
      <label className={styles.label}>Sort By:</label>
      <form className={styles.sorttypelistform}>
        <select
          defaultValue={sortInputValue}
          className={styles.sortytypeselect}
          name="filterByCateogry"
        >
          <option
            value="Title (ascending)"
            onClick={(e) => {
              setInputValue(e.target.value);
            }}
          >
            Title (ascending)
          </option>
          <option
            value="Title (descending)"
            onClick={(e) => {
              setInputValue(e.target.value);
            }}
          >
            Title (descending)
          </option>
          <option
            value="Rating (ascending)"
            onClick={(e) => {
              setInputValue(e.target.value);
            }}
          >
            Rating (ascending)
          </option>
          <option
            value="Rating (descending)"
            onClick={(e) => {
              setInputValue(e.target.value);
            }}
          >
            Rating (descending)
          </option>
        </select>
      </form>
    </div>
  );
};

export default SortTypeList;
