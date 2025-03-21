import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  sortBy: string;
  sortType: 'ASC' | 'DESC';
  filterByAdaptaBility: number;
  filterByAffection: number;
};

const initialState: InitialState = {
  sortBy: 'name',
  sortType: 'ASC',
  filterByAdaptaBility: 0,
  filterByAffection: 0,
};

const filterSlice = createSlice({
  name: 'filtr',
  initialState: initialState,
  reducers: {
    setSortBy(state, { payload }) {
      state.sortBy = payload;
    },
    setSortType(state, { payload }) {
      state.sortType = payload;
    },
    setSortAdaptability(state, { payload }) {
      state.filterByAdaptaBility = payload;
    },
    setSortAffection(state, { payload }) {
      state.filterByAffection = payload;
    },
  },
});

export const { setSortBy, setSortType, setSortAdaptability, setSortAffection } =
  filterSlice.actions;
export default filterSlice.reducer;
