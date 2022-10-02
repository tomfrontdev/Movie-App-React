import styles from "../components/SortTypeList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../store/movies-slice";

const SortTypeList = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.sorttypelistcontainer}>
      <label className={styles.label}>Sort By:</label>
      <form className={styles.sorttypelistform}>
        <select className={styles.sortytypeselect} name="filterByCateogry">
          <option
            onClick={() =>
              dispatch(
                moviesActions.sort({ sortDirection: "asc", sortBy: "title" })
              )
            }
          >
            Title (ascending)
          </option>
          <option
            onClick={() =>
              dispatch(
                moviesActions.sort({ sortDirection: "desc", sortBy: "title" })
              )
            }
          >
            Title (descending)
          </option>
          <option
            onClick={() =>
              dispatch(
                moviesActions.sort({ sortDirection: "asc", sortBy: "rating" })
              )
            }
          >
            Rating (ascending)
          </option>
          <option
            onClick={() =>
              dispatch(
                moviesActions.sort({
                  sortDirection: "desc",
                  sortBy: "rating",
                })
              )
            }
          >
            Rating (descending)
          </option>
        </select>
      </form>
    </div>
  );
};

export default SortTypeList;
