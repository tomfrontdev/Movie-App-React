import React from 'react';
import ReactDOM from 'react-dom';
import classes from './DropdownModal.module.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { moviesActions } from '../../store/movies-slice';
import Nav from '../Header/Nav';
import { AiOutlineClose } from 'react-icons/ai';

const DropdownModal = () => {
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);
  const showDropDownModal = useAppSelector(
    (state) => state.movies.showDropDownModal
  );
  const dispatch = useAppDispatch();

  const toggleModal = () => {
    dispatch(moviesActions.toggleDropDownModal(!showDropDownModal));
  };

  const darkorlightMode = isdayModeActive ? 'black' : 'white';

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={toggleModal}>
        <div
          className={`${classes.dropdown} ${
            showDropDownModal ? classes.showMenu : classes.hidden
          }`}
          style={{ backgroundColor: isdayModeActive ? 'white' : 'black' }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={classes.dropdownlist}>
            <AiOutlineClose
              onClick={toggleModal}
              className={classes.closeIcon}
              style={{ color: darkorlightMode }}
            />
            <Nav darkorlightMode={darkorlightMode} />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

let portalDiv = document.getElementById('backdrop-root') as HTMLElement;

const ModalSource = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<DropdownModal />, portalDiv)}
    </React.Fragment>
  );
};

export default ModalSource;
