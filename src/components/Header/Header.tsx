import { Fragment, useEffect } from 'react';
import classes from '../Header/Header.module.css';
import DropdownModal from '../Modals/DropdownModal';
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';
import SearchMovie from '../Forms/SearchMovie';
import { moviesActions } from '../../store/movies-slice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { MdFavorite } from 'react-icons/md';

import Nav from './Nav';
import btn from '../Buttons/Button.module.css';

const Header = () => {
  const isFormActive = useAppSelector((state) => state.movies.isFormActive);
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);
  const showDropDownModal = useAppSelector(
    (state) => state.movies.showDropDownModal
  );
  const favMovieList = useAppSelector((state) => state.movies.favMovieList);

  const dispatch = useAppDispatch();

  const location = useLocation();

  const toggleModal = () => {
    dispatch(moviesActions.toggleDropDownModal(!showDropDownModal));
  };

  useEffect(() => {
    dispatch(moviesActions.toggleDropDownModal(false));
  }, [location, dispatch]);

  const darkorlightMode = isdayModeActive ? 'black' : 'white';
  const colors = isdayModeActive ? `${btn.nightMode}` : `${btn.dayMode}`;

  return (
    <Fragment>
      <header className={classes.header}>
        {!showDropDownModal && (
          <div className={classes.hamburgerContainer + ' ' + classes.hidden}>
            <Hamburger
              onClick={toggleModal}
              className={classes.hamburger}
              style={{ color: darkorlightMode }}
            />
            {favMovieList.length > 0 && (
              <MdFavorite
                className={`${btn.headerfavIcon} ${colors}`}
              ></MdFavorite>
            )}
          </div>
        )}
        {showDropDownModal && <DropdownModal />}
        <ul className={classes.headerlist + ' ' + classes.hidden}>
          <Nav darkorlightMode={darkorlightMode} />
        </ul>
        {isFormActive && <SearchMovie />}
      </header>
    </Fragment>
  );
};

export default Header;
