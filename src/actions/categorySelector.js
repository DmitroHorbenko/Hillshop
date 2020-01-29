import { GET_CATEGORIES, CATEGORIES_LOADING, CATEGORIES_ERRORED } from './index'

export const fetchCategories = url => {
    return dispatch => {
        dispatch(categoriesLoading(true))
        fetch(url)
            .then((res) => {
                dispatch(categoriesLoading(false));
                return res;
            })
            .then((res) => res.json())
            .then((items) => dispatch(getCategories(items)))
            .catch(() => dispatch(categoriesErrored(true)))
    }
}

export const getCategories = items => {
    return {
        type: GET_CATEGORIES,
        items,
    }
}

export const categoriesLoading = bool => {
    return {
        type: CATEGORIES_LOADING,
        payload: bool,
    }
}

export const categoriesErrored = bool => {
    return {
        type: CATEGORIES_ERRORED,
        payload: bool,
    }
}