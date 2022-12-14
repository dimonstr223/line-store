import {
	CategoriesActionType,
	CategoriesState,
	CategorisAction,
} from './../types/categoriesTypes'

const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
	isOpened: false,
}

const categoriesReducer = (
	state = initialState,
	action: CategorisAction
): CategoriesState => {
	switch (action.type) {
		case CategoriesActionType.SET_CATEGORIES:
			return { ...state, categories: action.payload }
		case CategoriesActionType.SET_ERROR:
			return { ...state, error: action.payload }
		case CategoriesActionType.SET_IS_LOADING:
			return { ...state, isLoading: action.payload }
		case CategoriesActionType.SET_IS_OPENED:
			return { ...state, isOpened: action.payload }
		default:
			return state
	}
}

export default categoriesReducer
