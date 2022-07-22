import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTable } from "../api";

export const getTableAction = createAsyncThunk("spa/getTableAction",async ()=>{
    return await getTable()
})