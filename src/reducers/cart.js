import { ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART_DATA, CART_LOADING, CART_ERRORED } from '../actions'

const initState = {
    cartIds: [],
    cartDetails: [],
    cartLoading: false,
    cartErrored: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartIds: [ ...state.cartIds, action.payload ]
            }
        case REMOVE_FROM_CART:
            const newCartDetail = state.cartDetails.slice()
            function findWithAttr(array, attr, value) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][attr] === value) {
                        return i
                    }
                }
                return -1
            }
            newCartDetail.splice(findWithAttr(newCartDetail, '_id', action.payload), 1)
            const newCart = state.cartIds.slice()
            newCart.splice(newCart.indexOf(action.payload), 1)
            return {
                ...state,
                cartIds: newCart,
                cartDetails: newCartDetail
            }
        case LOAD_CART_DATA:
            return {
                ...state,
                cartDetails: action.payload
            }
        case CART_LOADING:
            return {
                ...state,
                cartLoading: action.payload
            }
        case CART_ERRORED:
            return {
                ...state,
                cartErrored: action.payload
            }
        default:
            return state
    }
}