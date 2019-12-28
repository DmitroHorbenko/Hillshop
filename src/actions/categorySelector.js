import { GET_CATEGORIES, CATEGORIES_LOAD, CATEGORIES_ERROR } from './types'

export const getCategories = items => {
    return {
        type: GET_CATEGORIES,
        items,
    }
}

export const categoriesLoad = bool => {
    return {
        type: CATEGORIES_LOAD,
        payload: bool,
    }
}

export const categoriesError = bool => {
    return {
        type: CATEGORIES_ERROR,
        payload: bool,
    }
}

export const fetchCategories = url => {
    return dispatch => {
        dispatch(categoriesLoad(true))
        fetch(url)
            .then((res) => {
                dispatch(categoriesLoad(false));
                return res;
            })
            .then((res) => res.json())
            .then((items) => dispatch(getCategories(items)))
            .catch(() => dispatch(categoriesError(true)))
    }
}