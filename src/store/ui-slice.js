import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showRemoveItemModal: false,
    error: false,
    isdataLoading: false,
    postsPerPageLargeScreen: 8,
    postsPerPageSmallScreen: 2,
    showDropDownModal: false,
  },
  reducers: {
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

export const uiActions = uiSlice.actions;

export default uiSlice;
