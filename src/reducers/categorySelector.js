import { GET_CATEGORIES, CATEGORIES_LOAD, CATEGORIES_ERROR } from '../actions/types'

const initState = {
    categories: [],
    categoriesLoad: false,
    categoriesError: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case CATEGORIES_LOADING:
            return {
                ...state,
                categoriesLoad: action.payload
            }
        case CATEGORIES_ERROR:
            return {
                ...state,
                categoriesError: action.payload
            }
        default:
            return state
    }
}