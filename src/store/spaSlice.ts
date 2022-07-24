import { createSlice } from "@reduxjs/toolkit";
import { Columns, Comparison, IInitialState, SortOptions } from "../models/models";
import { getFilteredTableAction } from "./actions";

const initialState: IInitialState = {
  table: [],
  filter: {
    property: Columns.title,
    comparison: Comparison.like,
    value: "",
  },
  loading: false,
  errorLoading: false,
  sort:SortOptions.title,
  sortDirection: false,
  currentPage:1
};

export const spaSlice = createSlice({
  name: "spa",
  initialState,
  reducers: {
    setFilterProperty(state, action) {
      state.filter.property = action.payload;
      state.filter.comparison = Comparison.eq;
    },
    setFilterComparison(state, action) {
      state.filter.comparison = action.payload;
    },
    setFilterValue(state, action) {
      state.filter.value = action.payload;
    },
    setPage(state,action) {
      state.currentPage = action.payload;
    },
    setSort(state,action) {
      state.sort = action.payload;
    },
    setSortDirection(state,action) {
      state.sortDirection = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getFilteredTableAction.pending, (state, action) => {
      state.loading = true;
      state.errorLoading = false;
    });

    builder.addCase(getFilteredTableAction.fulfilled, (state, action) => {
      state.table = action.payload || [];
      state.loading = false;
    });

    builder.addCase(getFilteredTableAction.rejected, (state, action) => {
      state.loading = false;
      state.errorLoading = true;
    });
  },
});

export const spaReducer = spaSlice.reducer;
export const { setFilterProperty, setFilterComparison, setFilterValue,setPage,setSort,setSortDirection } =
  spaSlice.actions;
