import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reduсers/index'

const initialState = {
    cart: ['id1','id2','id3'],
    categories: [],
    categoriesLoad: false
}

const middlware = [thunk]

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store