// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3300/api/cards';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    filteredData: [],
    searchTerm: '',
    matchingCards: [],
    showModal: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.matchingCards = state.data.filter(card =>
        card.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.showModal = state.matchingCards.length > 0;
    },
    closeModal(state) {
      state.showModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, closeModal } = dataSlice.actions;

export default dataSlice.reducer;
