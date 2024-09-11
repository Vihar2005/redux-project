import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count:0
}

const CounterReducers = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
    }
})

export const {increment,decrement} = CounterReducers.actions
export default CounterReducers.reducer