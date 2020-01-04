import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART_DATA } from '../actions'

const initState = {
    cart: ['1', '2', '3']
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            }
        case ADD_TO_CART:
            return {
                ...state
            }
        case REMOVE_FROM_CART:
            return {
                ...state
            }
        default:
            return state
    }
}