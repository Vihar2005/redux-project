export const INCREMENT = "Increment"
export const DECREMENT = "Decrement"
export const BUY_BOOK = "Buy_Book"


export const increment =()=>{
    return{type : INCREMENT}
}

export const decrement =()=>{
    return {type : DECREMENT}
}

export const buy_book =()=>{
    return {type : BUY_BOOK}
}