import { configureStore } from "@reduxjs/toolkit";
import CounterReducers from "./CounterReducer";

export const store = configureStore({
    reducer:{
        "counter":CounterReducers
    }
})