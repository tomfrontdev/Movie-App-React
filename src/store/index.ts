import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './movies-slice';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;
