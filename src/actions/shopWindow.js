import { GET_PRODUCTS, PRODUCTS_LOADING, PRODUCTS_ERRORED } from './index'

export const fetchProducts = (url, categoryId) => {
    return dispatch => {
        dispatch(productsLoading(true))
        fetch(url)
            .then(res => {
                dispatch(productsLoading(false))
                return res;
            })
            .then(res => res.json())
            .then(items => {
                dispatch(getProductsSuccess(items.filter(item=>item.category._id === categoryId)))
            })
            .catch(() => dispatch(productsErrored(true)))
    }
}

export const getProductsSuccess = itemsArray => {
    return {
        type: GET_PRODUCTS,
        payload: itemsArray,
    }
}

export const productsLoading = bool => {
    return {
        type: PRODUCTS_LOADING,
        payload: bool,
    }
}

export const productsErrored = bool => {
    return {
        type: PRODUCTS_ERRORED,
        payload: bool,
    }
}