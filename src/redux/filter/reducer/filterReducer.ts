import { Product } from './../../products/types/productsTypes'
import {
	FilterState,
	FilterAction,
	FilterActionType,
} from './../types/filterTypes'

const initialState: FilterState = {
	searchValue: '',
	isLoading: false,
	error: null,
	isPopupOpened: false,
	sortingParam: 'order',
}

const filterReducer = (
	state = initialState,
	action: FilterAction
): FilterState | Product[] => {
	switch (action.type) {
		case FilterActionType.SET_SEARCH_VALUE:
			return { ...state, searchValue: action.payload }
		case FilterActionType.SET_IS_LOADING:
			return { ...state, isLoading: action.payload }
		case FilterActionType.SET_ERROR:
			return { ...state, error: action.payload }
		case FilterActionType.SET_IS_POPUP_OPENED:
			return { ...state, isPopupOpened: action.payload }
		case FilterActionType.SET_SORTING_PARAM:
			return { ...state, sortingParam: action.payload }
		default:
			return state
	}
}

export default filterReducer
