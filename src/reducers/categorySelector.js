import {GET_CATEGORIES, CATEGORIES_LOADING, CATEGORIES_ERRORED} from '../actions'

const initialState = {
    categories: [],
    categoriesLoading: false,
    categoriesErrored: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case CATEGORIES_LOADING:
            return {
                ...state,
                categoriesLoading: action.payload
            }
        case CATEGORIES_ERRORED:
            return {
                ...state,
                categoriesErrored: action.payload
            }
        default:
            return state
    }
}