import { combineReducers } from 'redux'

import cartReducer from './cart'
import categorySelectorReducer from './categorySelector'
import shopWindowReducer from './shopWindow'
import productWindowReducer from './productWindow'

const rootReducer = combineReducers({
    cart: cartReducer,
    categorySelector: categorySelectorReducer,
    shopWindow: shopWindowReducer,
    productWindow: productWindowReducer
})

export default rootReducer