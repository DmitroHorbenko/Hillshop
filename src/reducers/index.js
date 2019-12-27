import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import categorySelectorReducer from './categorySelectorReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    categorySelector: categorySelectorReducer,
})

export default rootReducer