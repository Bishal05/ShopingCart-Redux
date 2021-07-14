let initialState={
    balls:5
}

function BallReducer(state=initialState,action){

    // updating state
    switch(action.type){
        case "buy_ball":
            let newState1={
                balls:state.balls-1
            }
            return newState1;
        case "sell_ball":
            let newState2={
                balls:state.balls+1
            }
            return newState2;
        default:
            return state
    }
}

export default BallReducer;