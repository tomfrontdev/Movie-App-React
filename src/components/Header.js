import React from "react";
import classes from "../components/Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <ul>
          <li>Strona Główna</li>
          <li>Lista Ulubionych</li>
          <li>Dodaj Film</li>
          <li>Lista Dodanych Filmów</li>
        </ul>
      </header>
    </React.Fragment>
  );
};

export default Header;
