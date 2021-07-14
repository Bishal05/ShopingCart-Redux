import React from 'react'
import {connect} from "react-redux"
function Ball(props) {
    return (
        <div>
            <h2>Number of Balls : {props.balls}</h2>
            <button onClick={props.buyball}>Buy Balls</button>
            <button onClick={props.sellball}>Sell Balls</button>
        </div>
    )
}

// provide state variable from store
const mapStateToProps=(store)=>{
    // console.log("store ",store);
    return store.Ball;
}

//dispatch action to reducer
const mapDispatchToProps=(dispatch)=>{
    return{
        buyball:()=>{
            return dispatch({type:"buy_ball"})
        },
        sellball:()=>{
            return dispatch({type:"sell_ball"})
        }
    }
}

//(Balls)->Component that needs the state
// (mapStateToProps)->function that provides state from the store
// (mapDispatchToProps) ->function that dispatch the actions to reducers
// connect->connects the component which requires state and the function which provide state and different functions to change state
export default connect(mapStateToProps,mapDispatchToProps)(Ball);
