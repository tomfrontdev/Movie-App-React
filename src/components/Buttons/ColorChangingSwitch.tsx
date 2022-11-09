import classes from '../Buttons/ColorChangingSwitch.module.css';
import { moviesActions } from '../../store/movies-slice';
import { useDispatch } from 'react-redux';
import { Fragment, useLayoutEffect, useState } from 'react';

const ToggleSwitch = () => {
  const [isSliderChecked, setisSliderChecked] = useState(
    JSON.parse(localStorage.getItem('isInputClicked')!)
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    localStorage.setItem('isInputClicked', JSON.stringify(isSliderChecked));
    if (isSliderChecked) {
      dispatch(moviesActions.toggledayMode(true));
    } else {
      dispatch(moviesActions.toggledayMode(false));
    }
  }, [isSliderChecked]);

  const toggledayMode = () => {
    setisSliderChecked(!isSliderChecked);
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
              isSliderChecked
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
