import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FavoriteMoviesPage from './pages/FavoriteMoviesPage';
import AddedOwnMoviePage from './pages/AddedOwnMoviePage';
import AddOwnMoviePage from './pages/AddOwnMoviePage';
import EditOwnMoviePage from './pages/EditOwnMoviePage';

import { useSelector } from 'react-redux';
import type { RootState } from './store';

function App() {
  const isdayModeActive = useSelector<RootState>(
    (state) => state.movies.dayMode
  );

  return (
    <React.Fragment>
      <main className={isdayModeActive ? styles.dayMode : styles.nightMode}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<MainPage />} />
          <Route path="/favoritemovies" element={<FavoriteMoviesPage />} />
          <Route path="/addfilm" element={<AddOwnMoviePage />} />
          <Route path="/addedfilms" element={<AddedOwnMoviePage />} />
          <Route path={`/editfilm/:productId`} element={<EditOwnMoviePage />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
