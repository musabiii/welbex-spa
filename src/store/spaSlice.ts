import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../models/models";
import { getTableAction } from "./actions";


const initialState:IInitialState = {
    table:[]
}

export const spaSlice = createSlice({
    name:'spa',
    initialState,
    reducers:{

    },
    extraReducers: builder => {
        builder.addCase(getTableAction.pending, (state, action) => {
          // both `state` and `action` are now correctly typed
          // based on the slice state and the `pending` action creator
        })
      }
})