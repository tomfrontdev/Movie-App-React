import React from "react";
import styles from "./App.module.css";
import SpinnerModal from "./components/SpinnerModal";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";
import AddedOwnMoviePage from "./pages/AddedOwnMoviePage";
import AddOwnMoviePage from "./pages/AddOwnMoviePage";

function App() {
  return (
    <React.Fragment>
      <main className={styles.App}>
        <Header></Header>
        <Route path="/welcome">
          <MainPage></MainPage>
        </Route>
        <Route path="/favoritemovies">
          <FavoriteMoviesPage></FavoriteMoviesPage>
        </Route>
        <Route path="/addfilm">
          <AddOwnMoviePage></AddOwnMoviePage>
        </Route>
        <Route path="/addedfilms">
          <AddedOwnMoviePage></AddedOwnMoviePage>
        </Route>
      </main>
    </React.Fragment>
  );
}

export default App;
