import {combineReducers} from "redux"
import BatReducer from "./bat/batReducer"
import BallReducer from "./ball/ballReducer"
import userReducer from "./User/userReducer";

const rootReducer=combineReducers({
    Ball:BallReducer,
    Bat:BatReducer,
    User:userReducer
});

export default rootReducer;