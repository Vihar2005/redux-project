import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ALLREMOVE, STUDENTADD, STUDENTREMOVE } from '../Redux-task/Action-task'

const StudentComponent = () => {
    const student = useSelector((state)=>state.student)
    // const reset = useSelector((state)=>state.reset)
    const dispatch = useDispatch();
    return (
    <div>
      <h3>redux Task </h3>
      <h3>students is {student}</h3>
      <button onClick={()=>dispatch({type:STUDENTADD})}>AddStudent</button>
      <button onClick={()=>dispatch({type:STUDENTREMOVE})}>RemoveStudent</button>
      <button onClick={()=>dispatch({type:ALLREMOVE})}>reset</button>
    </div>
  )
}

export default StudentComponent
