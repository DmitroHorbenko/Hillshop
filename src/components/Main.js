import React from 'react'

import Cart from './Cart'
import ShopWindow from './ShopWindow'
import CategorySelector from './CategorySelector'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from 'react-redux'
import store from '../store'

export default function Main() {
    return <Provider store={store}>
        <Router>
            <CategorySelector/>
            <Switch>
                <Route path='/cart' component={Cart}></Route>
                <Route path='/shop' component={ShopWindow} ></Route>
            </Switch>
        </Router>
    </Provider>
}