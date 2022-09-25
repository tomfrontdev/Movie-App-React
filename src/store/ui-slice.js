import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showRemoveItemModal: false,
    error: false,
    isdataLoading: false,
    postsPerPage: 8,
    currentPage: 1,
  },
  reducers: {
    toggleRemoveModal(state) {
      state.showRemoveItemModal = !state.showRemoveItemModal;
    },
    showLoadingSpinner(state, action) {
      state.isdataLoading = action.payload;
    },
    errorFetchingData(state, action) {
      state.error = action.payload;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
