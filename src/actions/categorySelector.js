import { GET_CATEGORIES, CATEGORIES_LOAD } from './types'

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

export const fetchCategories = url => {
    return dispatch => {
        dispatch(CATEGORIES_LOAD(true))
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                dispatch(CATEGORIES_LOAD(false));
                return res;
            })
            .then((res) => res.json())
            .then((items) => dispatch(getCategories(items)))
    }
}