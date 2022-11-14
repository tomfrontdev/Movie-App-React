import classes from '../Buttons/ColorChangingSwitch.module.css';
import { moviesActions } from '../../store/movies-slice';
import { useDispatch } from 'react-redux';
import { Fragment } from 'react';
import { useAppSelector } from '../../store/hooks';

const ToggleSwitch = () => {
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);

  const dispatch = useDispatch();

  const toggledayMode = () => {
    dispatch(moviesActions.toggledayMode(!isdayModeActive));
  };

  return (
    <Fragment>
      <div className={classes.toggleswitch}>
        <label className={classes.switch}>
          <input
            type="checkbox"
            className={classes.checkbox}
            onChange={toggledayMode}
          />

          <span
            className={
              isdayModeActive
                ? classes.slider + ' ' + classes.sliderChecked
                : classes.slider + ' ' + classes.sliderNotChecked
            }
          />
        </label>
      </div>
    </Fragment>
  );
};

export default ToggleSwitch;
