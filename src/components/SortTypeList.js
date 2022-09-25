import styles from "../components/SortTypeList.module.css";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";

const SortTypeList = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.sorttypelistcontainer}>
      <label className={styles.label}>Sort By:</label>
      <form className={styles.sorttypelistform}>
        <select className={styles.sortytypeselect} name="filterByCateogry">
          <option onClick={() => dispatch(moviesActions.nameAscending())}>
            Name (ascending)
          </option>
          <option onClick={() => dispatch(moviesActions.nameDescending())}>
            Name (descending)
          </option>
          <option onClick={() => dispatch(moviesActions.ratingAscending())}>
            Rating (ascending)
          </option>
          <option onClick={() => dispatch(moviesActions.ratingDescending())}>
            Rating (descending)
          </option>
        </select>
      </form>
    </div>
  );
};

export default SortTypeList;
