import {products} from "../data/data"
let initialState={
    productArray:[...products],
    count:0,
}

function homeReducer(state=initialState,action){
    switch(action.type){
        case "addToCart":
            return{
                ...state,
                count:state.count+1
            }
        default:
            return state;
    }
}

export default homeReducer;