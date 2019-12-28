import { combineReducers } from 'redux'

import cartReducer from './cart'
import categorySelectorReducer from './categorySelector'

const rootReducer = combineReducers({
    cart: cartReducer,
    categorySelector: categorySelectorReducer,
})

export default rootReducer