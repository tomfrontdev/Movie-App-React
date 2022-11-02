import classes from "../Buttons/ColorChangingSwitch.module.css";
import { moviesActions } from "../../store/movies-slice";
import { useDispatch } from "react-redux";

const ToggleSwitch = () => {
  const dispatch = useDispatch();

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
