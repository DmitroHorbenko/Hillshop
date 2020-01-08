import { ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART_DATA, CART_LOADING, CART_ERRORED } from './index'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const cartLoading = (bool) => {
    return {
        type: CART_LOADING,
        payload: bool
    }
}

export const cartErrored = (bool) => {
    return {
        type: CART_ERRORED,
        payload: bool
    }
}

export const loadCartData = (cartDetails) => {
    return {
        type: LOAD_CART_DATA,
        payload: cartDetails
    }
}

export const fetchCartData = (url, idArray) => {
    return dispatch => {
        dispatch(cartLoading(true))
        Promise.all(idArray.map(async id => {
            const res = await fetch(url + id);
            return await res.json();
        }))
            .then(res => {
                dispatch(cartLoading(false))
                return res;
            })
            .then(items => dispatch(loadCartData(items)))
            .catch(() => dispatch(cartErrored(true)))
    }
}

