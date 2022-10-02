import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  favMovieList: [],
  ownMovieList: [],
  filteredMovies: [],
  clickedMovie: [],
  movieTitle: "",
  movieDescription: "",
  editMovie: false,
  searchInput: "",
  isDataFetched: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movieList = action.payload;
      state.movieList = action.payload.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
    },
    setFetchedData(state, action) {
      state.isDataFetched = action.payload;
    },

    sort(state, action) {
      const order = action.payload.sortDirection;
      const title = action.payload.sortBy;
      console.log(order);
      console.log(title);
      if (order === "asc") {
        state.movieList = state.movieList.sort((a, b) =>
          a[title] > b[title] ? 1 : -1
        );
      }
      if (order === "desc") {
        state.movieList = state.movieList.sort((a, b) =>
          a[title] > b[title] ? -1 : 1
        );
      }
    },
    filterMovies(state, action) {
      state.filteredMovies = action.payload;
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
      state.filteredMovies = state.favMovieList;
    },
    removeMovieFromFav(state, action) {
      console.log(action.payload);
      state.favMovieList = state.favMovieList.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;
