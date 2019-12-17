import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART } from './types'

export const getCart = () => {
    return {
        type: GET_CART,
    }
}