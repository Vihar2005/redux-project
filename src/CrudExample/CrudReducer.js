import { DELETE, INSERT, UPDATE } from "./Crud-Action"

const initialState = {
    data: []
}

const CrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT: return {
            ...state,
            data: [...state.data, action.payload]
        }

        case DELETE: return {
            ...state,
            data: state.data.filter((i) => {
                return i.id != action.payload
            })
        }
        case UPDATE: return {
            ...state,
            data: state.data.map((i) => {
                return (i.id == action.payload.id) ? action.payload.data : i
            })
        }
        default: return state

    }
}
export default CrudReducer
