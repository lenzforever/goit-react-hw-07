import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Экспорты
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = state => state.filters.name;
