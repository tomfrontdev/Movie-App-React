import { createSlice } from '@reduxjs/toolkit';

type Movie = {
  id: number;
  img: string;
  year: string;
  title: number;
  rating: number;
};

type State = {
  movieList: Movie[];
  favMovieList: Movie[];
  ownMovieList: Movie[];
  clickedMovie: Movie | null;
  filteredMovies: Movie[];
  movieTitle: string;
  movieRating: string;
  editMovie: boolean;
  searchInput: string;
  isDataFetched: boolean;
  isFormActive: boolean;
  sortFormInputValue: string;
  filterInput: string;
  dayMode: boolean;
  showRemoveItemModal: boolean;
  error: boolean;
  isdataLoading: boolean;
  postsPerPageLargeScreen: number;
  postsPerPageSmallScreen: number;
  showDropDownModal: boolean;
};

const initialState: State = {
  movieList: [],
  favMovieList: [],
  ownMovieList: [],
  filteredMovies: [],
  clickedMovie: null,
  movieTitle: '',
  movieRating: '',
  editMovie: false,
  searchInput: '',
  isDataFetched: false,
  isFormActive: true,
  sortFormInputValue: '',
  filterInput: '',
  dayMode: false,
  showRemoveItemModal: false,
  error: false,
  isdataLoading: false,
  postsPerPageLargeScreen: 8,
  postsPerPageSmallScreen: 2,
  showDropDownModal: false,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movieList = action.payload;
      const sortParams = state.sortFormInputValue.split(' ');
      const title = sortParams[0];
      const titletoLowerCase = title.toLowerCase();
      const order = sortParams[1];
      if (order === '(ascending)') {
        state.movieList = state.movieList.sort((a, b) =>
          // @ts-ignore
          a[titletoLowerCase] > b[titletoLowerCase] ? 1 : -1
        );
      }
      if (order === '(descending)') {
        state.movieList = state.movieList.sort((a, b) =>
          // @ts-ignore
          a[titletoLowerCase] > b[titletoLowerCase] ? -1 : 1
        );
      }
    },
    setFetchedData(state, action) {
      state.isDataFetched = action.payload;
    },
    setForm(state, action) {
      state.isFormActive = action.payload;
    },
    setInputValue(state, action) {
      state.sortFormInputValue = action.payload;
    },
    sort(state, action) {
      const title = action.payload.sortBy;
      const order = action.payload.sortDirection;
      const movieList = action.payload.movieListname;
      if (order === '(ascending)') {
        // @ts-ignore
        state[movieList] = state[movieList].sort(
          (a: { [x: string]: number }, b: { [x: string]: number }) =>
            a[title] > b[title] ? 1 : -1
        );
      }
      if (order === '(descending)') {
        // @ts-ignore
        state[movieList] = state[movieList].sort(
          (a: { [x: string]: number }, b: { [x: string]: number }) =>
            a[title] > b[title] ? -1 : 1
        );
      }
    },
    filterMovies(state, action) {
      state.filteredMovies = action.payload;
    },
    setsearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setfilterInputValue(state, action) {
      state.filterInput = action.payload;
    },
    setTitle(state, action) {
      state.movieTitle = action.payload;
    },
    setRating(state, action) {
      state.movieRating = action.payload;
    },
    addOwnMovies(state, action) {
      state.ownMovieList = [...state.ownMovieList, action.payload];
    },
    setclickedMovie(state, action) {
      state.clickedMovie = action.payload;
    },
    removeMovie(state) {
      state.ownMovieList = state.ownMovieList.filter(
        (movie) => movie.id !== state.clickedMovie!.id
      );
      // GUARD:
      // if (state.clickedMovie !== null) {
      //     state.ownMovieList = state.ownMovieList.filter(
      //         (movie) => movie.id !== state.clickedMovie.id
      //     );
      // }
    },
    // CLICKEDMOVIE! - TEN WYKRZYKNI OZNACZA, ZE CLICKEDMOVIE NA PEWNO NIE JEST ANI NULL ANI UNDEFINED
    // removeMovie(state) {
    //     state.ownMovieList = state.ownMovieList.filter(
    //         (movie) => movie.id !== state.clickedMovie!.id
    //     );
    // },
    editMovie(state, action) {
      const id = action.payload.id;
      state.ownMovieList[id] = action.payload;
    },
    addMovieToFav(state, action) {
      state.favMovieList = [...state.favMovieList, action.payload];
      state.filteredMovies = state.favMovieList;
    },
    removeMovieFromFav(state, action) {
      state.favMovieList = state.favMovieList.filter(
        (movie) => movie.id !== action.payload
      );
      state.filteredMovies = state.favMovieList;
    },
    toggledayMode(state) {
      state.dayMode = !state.dayMode;
    },
    toggleRemoveModal(state) {
      state.showRemoveItemModal = !state.showRemoveItemModal;
    },
    toggleDropDownModal(state, action) {
      state.showDropDownModal = action.payload;
    },
    showLoadingSpinner(state, action) {
      state.isdataLoading = action.payload;
    },
    errorFetchingData(state, action) {
      state.error = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;
