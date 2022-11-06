import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import btn from '../Buttons/Button.module.css';
import { useAppSelector } from '../../store/hooks';

const Nav = ({ darkorlightMode }: { darkorlightMode: string }) => {
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);
  const favMovieList = useAppSelector((state) => state.movies.favMovieList);

  const colors = isdayModeActive ? `${btn.nightMode}` : `${btn.dayMode}`;

  return (
    <React.Fragment>
      <li className={classes.navli}>
        <NavLink
          className={classes.navlink}
          style={{ color: darkorlightMode }}
          to="/"
        >
          Strona Główna
        </NavLink>
      </li>
      <li className={classes.navli}>
        <NavLink
          className={classes.navlink}
          style={{ color: darkorlightMode }}
          to="/favoritemovies"
        >
          Lista ulubionych filmów
        </NavLink>
        {favMovieList.length > 0 && (
          <MdFavorite className={`${btn.favListIcon} ${colors}`}></MdFavorite>
        )}
      </li>
      <li className={classes.navli}>
        <NavLink
          className={classes.navlink}
          style={{ color: darkorlightMode }}
          to="/addfilm"
        >
          Dodaj film
        </NavLink>
      </li>
      <li className={classes.navli}>
        <NavLink
          className={classes.navlink}
          style={{ color: darkorlightMode }}
          to="/addedfilms"
        >
          Lista Dodanych Filmów
        </NavLink>
      </li>
    </React.Fragment>
  );
};

export default Nav;
