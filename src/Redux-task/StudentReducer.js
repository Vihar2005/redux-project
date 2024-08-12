import React from 'react'

import { STUDENTADD , STUDENTREMOVE , ALLREMOVE } from './Action-task'

const initialState = {
    student:0,
    // reset:0
}

const StudentReducer = (state=initialState,action) => {
  switch(action.type){
    case STUDENTADD :
        return {...state,student:state.student + 1}
    case STUDENTREMOVE : 
        return {...state,student:state.student - 1}
    case ALLREMOVE :
          return {...state,student:state.student = 0}

        default : return state;
    
  }
}

export default StudentReducer
