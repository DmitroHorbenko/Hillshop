import { GET_PRODUCT_INFO, PRODUCT_LOADING, PRODUCT_ERRORED } from '../actions'

const initialState = {
    product: {},
    productLoading: false,
    productErrored: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_INFO:
            return {
                ...state,
                product: action.payload,
            }
        case PRODUCT_LOADING:
            return {
                ...state,
                productLoading: action.payload,
            }
        case PRODUCT_ERRORED:
            return {
                ...state,
                productErrored: action.payload,
            }
        default:
            return state
    }
}