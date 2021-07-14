import {createStore} from "redux";
import homeReducer from "../cartRedux/homeReducer";

const store=createStore(homeReducer);
export default store;