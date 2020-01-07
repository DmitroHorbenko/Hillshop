import { GET_PRODUCT_INFO, PRODUCT_LOADING, PRODUCT_ERRORED } from './index'

export const fetchProductInfo = url => {
    return dispatch => {
        dispatch(productLoading(true))
        fetch(url)
            .then(res => {
                dispatch(productLoading(false))
                return(res)
            })
            .then(res => res.json())
            .then(product => dispatch(getProductsSuccess(product)))
            .catch(() => dispatch(productsErrored(true)))
    }
}

export const getProductsSuccess = productObject => {
    return {
        type: GET_PRODUCT_INFO,
        payload: productObject
    }
}

export const productLoading = bool => {
    return {
        type: PRODUCT_LOADING,
        payload: bool
    }
}

export const productsErrored = bool => {
    return {
        type: PRODUCT_ERRORED,
        payload: bool
    }
}