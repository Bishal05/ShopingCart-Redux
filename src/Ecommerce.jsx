import React from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import Product from "./CartPoc/cartComponents/Product"
import Cart from "./CartPoc/cartComponents/Cart"
import Home from "./CartPoc/cartComponents/Home"
import NavBar from "./CartPoc/cartComponents/NavBar"
import store from './CartPoc/app/store'
import {Provider} from "react-redux"

function Ecommerce() {
    return (
        <Provider store={store}>
            <div>
                <Router>
                    <NavBar></NavBar>
                    <Switch>
                        <Route path="/product"  component={Product}></Route>
                        <Route path="/cart"  component={Cart}></Route>
                        <Route path="/" exact component={Home}></Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    )
}

export default Ecommerce
