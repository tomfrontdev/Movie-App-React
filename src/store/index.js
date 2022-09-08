import { createStore } from "redux";

const initialState = {
  arr: [],
};

const counterReducer = (state = initialState, action) => {
  console.log(action.payload);
  if (action.type === "addData") {
    return {
      ...state,
      arr: [...state.arr, action.payload],
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
