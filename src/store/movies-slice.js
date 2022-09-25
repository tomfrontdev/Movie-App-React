import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  favMovieList: [],
  ownMovieList: [],
  clickedMovie: [],
  movieTitle: "",
  movieDescription: "",
  editMovie: false,
  searchInput: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movieList = action.payload;
    },
    ratingAscending(state) {
      state.movieList = state.movieList.sort((a, b) =>
        a.rating > b.rating ? 1 : -1
      );
    },
    ratingDescending(state) {
      state.movieList = state.movieList.sort((a, b) =>
        a.rating > b.rating ? -1 : 1
      );
    },
    nameAscending(state) {
      state.movieList = state.movieList.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
    },
    nameDescending(state) {
      state.movieList = state.movieList.sort((a, b) =>
        a.title > b.title ? -1 : 1
      );
    },
    setEditMovie(state, action) {
      state.editMovie = action.payload;
    },
    setsearchInput(state, action) {
      state.searchInput = action.payload;
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
    editMovie(state, action) {
      const id = action.payload.id;
      state.ownMovieList[id] = action.payload;
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
