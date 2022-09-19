import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showRemoveItemModal: false, error: "", isdataLoading: false },
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
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
