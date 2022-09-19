import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  favMovieList: [],
  ownMovieList: [],
  lastClickedMovieToRemove: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movieList = action.payload;
      console.log(action.payload);
    },
    addOwnMovies(state, action) {
      state.ownMovieList = [...state.ownMovieList, action.payload];
    },

    addlastClickedMovieToRemove(state, action) {
      state.lastClickedMovieToRemove = action.payload;
    },
    removelastClickedMovie(state) {
      state.ownMovieList = state.ownMovieList.filter(
        (movie) => movie.id !== state.lastClickedMovieToRemove.id
      );
    },
    addMovieToFav(state, action) {
      state.favMovieList = [...state.favMovieList, action.payload];
    },
    removeMovieFromFav(state, action) {
      state.favMovieList = state.favMovieList.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;
