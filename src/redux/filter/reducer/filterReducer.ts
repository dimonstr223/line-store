import {
	FilterState,
	FilterAction,
	FilterActionType,
} from './../types/filterTypes'

const initialState: FilterState = {
	searchValue: '',
}

const filterReducer = (
	state = initialState,
	action: FilterAction
): FilterState => {
	switch (action.type) {
		case FilterActionType.SET_SEARCH_VALUE:
			return { ...state, searchValue: action.payload }
		default:
			return state
	}
}

export default filterReducer
