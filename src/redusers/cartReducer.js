import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'

const initialState = {
    cart: ['id_1', 'id_2', 'id_3', 'id_4']
}

export default function (state = initialState, action) {
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