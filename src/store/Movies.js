import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  favMovieList: [],
  ownMovieList: [],
  showModal: true,
  lastClickedMovieToRemove: [],
};

const Movies = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    AddMovies(state, action) {
      state.movieList = action.payload;
    },
    AddOwnMovies(state, action) {
      state.ownMovieList = [...state.ownMovieList, action.payload];
    },
    HandleModal(state, action) {
      state.showModal = !state.showModal;
    },
    addlastClickedMovieToRemove(state, action) {
      state.lastClickedMovieToRemove = action.payload;
    },
    removelastClickedMovie(state, action) {
      state.ownMovieList = state.ownMovieList.filter(
        (movie) => movie.id !== state.lastClickedMovieToRemove.id
      );
    },
    AddMovieToFav(state, action) {
      state.favMovieList = [...state.favMovieList, action.payload];
    },
    RemoveMovieFromFav(state, action) {
      state.favMovieList = state.favMovieList.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

const store = configureStore({ reducer: Movies.reducer });

export const moviesActions = Movies.actions;

export default store;
