import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux-toolkit/CounterReducer'


const ReduxToolkit = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
        <h3>Redux Example</h3>
        <h4>Counter is -- {count}</h4>
        <button onClick={()=>dispatch(increment())}>Add</button>
        <button onClick={()=>dispatch(decrement())}>Minus</button>
      </div>
    )
}

export default ReduxToolkit
