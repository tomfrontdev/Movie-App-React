import classes from "../components/ToggleSwitch.module.css";
import { moviesActions } from "../store/movies-slice";
import { useDispatch, useSelector } from "react-redux";

const ToggleSwitch = () => {
  const dispatch = useDispatch();
  const isdayModeActive = useSelector((state) => state.movies.dayMode);

  const toggledayMode = () => {
    dispatch(moviesActions.toggledayMode());
  };

  return (
    <div className={classes.toggleswitch}>
      <label className={classes.switch}>
        <input
          type="checkbox"
          className={classes.checkbox}
          onChange={toggledayMode}
        />
        <span className={classes.slider + " " + classes.round} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
