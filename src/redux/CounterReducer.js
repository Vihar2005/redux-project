import React from 'react'
import { BUY_BOOK, DECREMENT, INCREMENT } from './action'
const initialState = {
    count:0,
    books:10
}

const CounterReducer = (state=initialState,action) => {
    switch(action.type){
        case INCREMENT :
            return {...state,count:state.count + 1}
        case DECREMENT :
            return {...state,count:state.count - 1}
        case BUY_BOOK :
            return {...state,books:state.books - 1}

        default: return state;
    }


}

export default CounterReducer
