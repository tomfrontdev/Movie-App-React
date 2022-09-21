import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  favMovieList: [],
  ownMovieList: [],
  clickedMovie: [],
  movieTitle: "",
  movieDescription: "",
  editMovie: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movieList = action.payload;
      console.log(action.payload);
    },
    setEditMovie(state, action) {
      state.editMovie = action.payload;
    },
    setTitle(state, action) {
      state.movieTitle = action.payload;
    },
    setDescription(state, action) {
      state.movieDescription = action.payload;
    },
    addOwnMovies(state, action) {
      state.ownMovieList = [...state.ownMovieList, action.payload];
    },

    setclickedMovie(state, action) {
      state.clickedMovie = action.payload;
    },
    removeMovie(state) {
      state.ownMovieList = state.ownMovieList.filter(
        (movie) => movie.id !== state.clickedMovie.id
      );
    },
    removeMovieTwo(state, action) {
      state.ownMovieList = state.ownMovieList.filter(
        (movie) => movie.id !== action.payload
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
