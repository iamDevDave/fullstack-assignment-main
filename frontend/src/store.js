// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
