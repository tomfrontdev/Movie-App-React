import { createSlice } from '@reduxjs/toolkit';

type Movie = {
  id: number;
  img: string;
  year: string;
  title: string;
  rating: number;
};

type State = {
  movieList: Movie[];
  moviesFound: boolean;
  favMovieList: Movie[] | [];
  ownMovieList: Movie[] | [];
  clickedMovie: Movie | null;
  movieTitle: string;
  movieRating: string;
  editMovie: boolean;
  searchInput: string;
  isDataFetched: boolean;
  isFormActive: boolean;
  sortInputValue: string;
  filterInput: string;
  dayMode: boolean;
  showRemoveItemModal: boolean;
  error: string;
  isdataLoading: boolean;
  postsPerPageLargeScreen: number;
  postsPerPageSmallScreen: number;
  showDropDownModal: boolean;
  currentPage: any;
};

const initialState: State = {
  movieList: [],
  moviesFound: true,
  favMovieList: JSON.parse(localStorage.getItem('favList')!) ?? [],
  ownMovieList: JSON.parse(localStorage.getItem('ownMovieList')!) ?? [],
  clickedMovie: null,
  movieTitle: '',
  movieRating: '',
  currentPage: '',
  editMovie: false,
  searchInput: localStorage.getItem('searchInput')!,
  isDataFetched: false,
  isFormActive: true,
  sortInputValue:
    localStorage.getItem('sortInputValue')! ?? 'Title (ascending)',
  filterInput: '',
  dayMode: localStorage.getItem('dayMode') === 'true',
  showRemoveItemModal: false,
  error: '',
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
      const sortParams = state.sortInputValue.split(' ');
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
    setFoundMovies(state, action) {
      state.moviesFound = action.payload;
    },
    setForm(state, action) {
      state.isFormActive = action.payload;
    },
    sortInputValue(state, action) {
      state.sortInputValue = action.payload;
      const sortParams = action.payload.split(' ');
      const sortDirection = sortParams[0];
      const sortTitle = sortParams[1];
      if (sortDirection === '(ascending)') {
        // @ts-ignore
        state.movieList = state.movieList.sort((a, b) =>
          // @ts-ignore
          a[sortTitle] > b[sortTitle] ? 1 : -1
        );
      }
      if (sortDirection === '(descending)') {
        // @ts-ignore
        state.movieList = state.movieList.sort((a, b) =>
          // @ts-ignore
          a[sortTitle] > b[sortTitle] ? -1 : 1
        );
      }
      localStorage.setItem('sortInputValue', action.payload);
    },

    setsearchInput(state, action) {
      state.searchInput = action.payload;
      localStorage.setItem('searchInput', action.payload);
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
      localStorage.setItem('ownMovieList', JSON.stringify(state.ownMovieList));
    },
    setclickedMovie(state, action) {
      state.clickedMovie = action.payload;
    },
    removeMovie(state) {
      state.ownMovieList = state.ownMovieList.filter(
        (movie) => movie.id !== state.clickedMovie!.id
      );
      localStorage.setItem('ownMovieList', JSON.stringify(state.ownMovieList));
    },
    editMovie(state, action) {
      const id = action.payload.id;
      state.ownMovieList[id] = action.payload;
      localStorage.setItem('ownMovieList', JSON.stringify(state.ownMovieList));
    },
    addMovieToFav(state, action) {
      state.favMovieList = [...state.favMovieList, action.payload];
      localStorage.setItem('favList', JSON.stringify(state.favMovieList));
    },
    removeMovieFromFav(state, action) {
      state.favMovieList = state.favMovieList.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem('favList', JSON.stringify(state.favMovieList));
    },
    toggledayMode(state, action) {
      state.dayMode = action.payload;
      localStorage.setItem('dayMode', action.payload);
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
