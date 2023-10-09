import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsAsync,
  createContactAsync,
  deleteContactAsync,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContactsAsync.pending]: handlePending,
    [fetchContactsAsync.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContactsAsync.rejected]: handleRejected,
    [createContactAsync.pending]: handlePending,
    [createContactAsync.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [createContactAsync.rejected]: handleRejected,
    [deleteContactAsync.pending]: handlePending,
    [deleteContactAsync.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const selectError = state => state.contacts.error;
export const contactsReducer = contactsSlice.reducer;
