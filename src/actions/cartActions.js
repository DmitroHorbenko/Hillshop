import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART_DATA } from './types'

export const getCart = () => {
    return {
        type: GET_CART,
    }
}

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const removeCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const loadCartData = (arrayId) => {
    return {
        type: LOAD_CART_DATA,
        payload: arrayId
    }
}

