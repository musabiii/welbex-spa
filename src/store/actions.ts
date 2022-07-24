import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilteredTable, getTable } from "../api";
import { IFilter, IThunkProp } from "../models/models";

export const getTableAction = createAsyncThunk(
  "spa/getTableAction",
  async () => {
    return await getTable();
  }
);


export const getFilteredTableAction = createAsyncThunk(
  "spa/getFilteredTableAction",
  async ({ filter, page }: IThunkProp) => {
    return await getFilteredTable(filter,page);
  }
);
