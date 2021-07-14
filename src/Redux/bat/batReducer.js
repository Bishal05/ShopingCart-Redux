let initialState={
    quantity:20
}

function batReducer(state=initialState,action){
    // console.log(action);
    // console.log(state);

    switch(action.type){
        case "buy_bat":
            let newObject={
                // ...state,
                quantity:state.quantity-action.payload
            }
            return newObject;
        
        default:
            return state;
    }
}

export default batReducer;