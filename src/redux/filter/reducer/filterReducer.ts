import {
	FilterState,
	FilterAction,
	FilterActionType,
} from './../types/filterTypes'

const initialState: FilterState = {
	searchValue: '',
	isLoading: false,
	error: null,
}

const filterReducer = (
	state = initialState,
	action: FilterAction
): FilterState => {
	switch (action.type) {
		case FilterActionType.SET_SEARCH_VALUE:
			return { ...state, searchValue: action.payload }
		case FilterActionType.SET_IS_LOADING:
			return { ...state, isLoading: action.payload }
		case FilterActionType.SET_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}

export default filterReducer
