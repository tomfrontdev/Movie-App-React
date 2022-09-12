import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
};

const counterSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    addData(state, action) {
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    },
  },
});

//

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
