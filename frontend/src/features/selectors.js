// src/features/selectors.js
import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredData = (state) => state.data.filteredData;
