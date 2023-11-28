import { createSlice } from "@reduxjs/toolkit";


const initialState= {
  modal: false,
  signinModalOpen: false,
  bookCarModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    closeSigninModal: (state) => {
      state.signinModalOpen = false;
    },
    openSigninModal: (state) => {
      state.signinModalOpen = true;
    },
    openBookCarModal: (state) => {
      state.bookCarModalOpen = true;
    },
    closeBookCarModal: (state) => {
      state.bookCarModalOpen = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  closeSigninModal,
  openSigninModal,
  closeBookCarModal,
  openBookCarModal,
} = modalSlice.actions;

export default modalSlice.reducer;