import { configureStore } from "@reduxjs/toolkit";
import { spaReducer } from "./spaSlice";
export const store =  configureStore({
    reducer:{
        spaReducer
    },
    devTools:true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch