import React from "react";
import styles from "./App.module.css";
import RemoveItemModal from "./components/RemoveItemModal";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";
import AddedOwnMoviePage from "./pages/AddedOwnMoviePage";
import AddOwnMoviePage from "./pages/AddOwnMoviePage";
import EditOwnMoviePage from "./pages/EditOwnMoviePage";

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
        <Route path="/editfilm">
          <EditOwnMoviePage></EditOwnMoviePage>
        </Route>
      </main>
    </React.Fragment>
  );
}

export default App;
