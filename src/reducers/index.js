import { combineReducers } from 'redux'

import cartReducer from './cart'
import categorySelectorReducer from './categorySelector'
import shopWindowReducer from './shopWindow'

const rootReducer = combineReducers({
    cart: cartReducer,
    categorySelector: categorySelectorReducer,
    shopWindow: shopWindowReducer()
})

export default rootReducer