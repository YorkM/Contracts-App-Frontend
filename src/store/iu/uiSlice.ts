import { createSlice } from '@reduxjs/toolkit';

interface uiState {
  isDateModal: boolean;
}

const initialState: uiState = {
  isDateModal: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.isDateModal = true;
    },
    onCloseModal: (state) => {
      state.isDateModal = false;
    }
  },
})

export const { onOpenModal, onCloseModal } = uiSlice.actions;
