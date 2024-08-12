import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BUY_BOOK, DECREMENT, INCREMENT } from '../redux/action'

const ReduxComponent = () => {
    const count = useSelector((state)=>state.count)
    const books = useSelector((state)=>state.books)
    const dispatch = useDispatch();
    return (
    <div>
      <h3>Redux Example</h3>
      <h3>Counter is : {count}</h3>
      <button onClick={()=>dispatch({type:INCREMENT})}>Add</button>
      <button onClick={()=>dispatch({type:DECREMENT})}>remove</button>
      <h3>books are : {books}</h3>
      <button onClick={()=>dispatch({type:BUY_BOOK})}>buy book</button>
    </div>
  )
}

export default ReduxComponent
