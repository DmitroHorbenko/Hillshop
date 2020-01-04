import { GET_PRODUCTS, PRODUCTS_LOADING, PRODUCTS_ERRORED } from '../actions'

const initialState = {
    products: [],
    productsLoading: false,
    productsErrored: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case PRODUCTS_LOADING:
            return {
                ...state,
                productsLoading: action.payload,
            }
        case PRODUCTS_ERRORED:
            return {
                ...state,
                productsErrored: action.payload,
            }
        default:
            return state
    }
}