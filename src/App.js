import React from 'react';
import './App.css';
import store from './store';
import {Provider} from "react-redux"
import Ball from './Components/Balls';
import Bat from './Components/Bat';
import User from './Components/User';
import Ecommerce from "./Ecommerce";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"

function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <Ball></Ball>
    //     <Bat></Bat>
    //     <User></User>
    //   </div>
    // </Provider>
    <Ecommerce></Ecommerce>
  );
}

export default App;
